import fp from "fastify-plugin";
import { IUser, userModel } from "../models/user.js";
import { argon2id, argon2Verify } from "hash-wasm";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config.js";
import { nanoid } from "nanoid";

export default fp(async (app) => {
  app.post<{
    Body: { user: Omit<IUser, "id"> };
  }>("/user", async (request, reply) => {
    const userData = request.body.user;

    const password = await argon2id({
      password: userData.password,
      salt: crypto.randomBytes(16),
      parallelism: 1,
      iterations: 256,
      memorySize: 512,
      hashLength: 32,
      outputType: "encoded"
    });

    const user = new userModel({
      ...userData,
      password,
      id: nanoid(36),
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await user.save();

    const token = jwt.sign(
      {
        id: user.doc._id,
        username: user.doc.username
      },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    reply.send({
      message: "User created successfully",
      token
    });
  });

  app.post<{
    Body: {
      username: string;
      password: string;
      rememberMe: boolean;
    };
  }>("/user/login", async (request, reply) => {
    const { username, password, rememberMe } = request.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      reply.status(401).send({ message: "Invalid username or password" });
      return;
    }

    const valid = await argon2Verify({
      password,
      hash: user.password
    });

    if (!valid) {
      reply.status(401).send({ message: "Invalid username or password" });
      return;
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username
      },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    reply.send({
      message: "User logged in successfully",
      token,
      rememberMe
    });
  });

  app.get("/user/profile", async (request, reply) => {
    const tokenData = request.headers.authorization?.split(" ")[1] ?? "";

    if (!tokenData) {
      reply.status(401).send({ message: "Invalid token" });
      return;
    }

    const { id } = jwt.verify(tokenData, config.jwtSecret) as { id: string };

    const user = await userModel.findOne({
      id
    });
    reply.send(user);
  });
});
