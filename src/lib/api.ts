import axios from "axios";
// import { WebsocketBuilder } from "websocket-ts";

export const apiUrl =
  import.meta.env.API_URI?.toString() ?? "http://localhost:8080";

export const api = axios.create({ baseURL: apiUrl });
/* export const ws = new WebsocketBuilder(
  `${apiUrl.replace("http://", "ws://").replace("https://", "wss://")}/ws`
).build(); */

export const parseWsMessage = <T extends { type: string; data: unknown }>(
  msg: string
): T => JSON.parse(msg);
