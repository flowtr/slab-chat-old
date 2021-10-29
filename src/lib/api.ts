import axios from "axios";
import { io } from "socket.io-client";

export const apiUrl =
  import.meta.env.API_URI?.toString() ?? "http://localhost:8080";

export const api = axios.create({ baseURL: apiUrl });
export const socket = io(apiUrl);
