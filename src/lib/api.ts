import { io } from "socket.io-client";

export const apiUrl = import.meta.env.API_URI ?? "http://localhost:8080";

export const socket = io("http://");
