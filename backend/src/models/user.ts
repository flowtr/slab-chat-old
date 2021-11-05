import { model, Schema } from "mongosteel";

export interface IUser {
  id: string;
  username: string;
  password: string;
  updatedAt: Date;
  createdAt: Date;
}

export const userSchema = new Schema<IUser>({
  id: "string",
  username: "string",
  updatedAt: "mixed",
  createdAt: "mixed",
  password: "string"
});

export const userModel = model("user", userSchema, {});
