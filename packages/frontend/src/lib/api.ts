import axios, { AxiosInstance } from "axios";
// import { WebsocketBuilder } from "websocket-ts";

export class Api {
  protected readonly api: AxiosInstance;

  constructor(
    apiUrl = import.meta.env.API_URI?.toString() ??
      "http://localhost:8080/api/v1"
  ) {
    this.api = axios.create({ baseURL: apiUrl });
  }

  async login(data: { username: string; password: string }) {
    const response = await axios.post<{
      token: string;
    }>("/auth/login", data);

    return response.data;
  }
}

export const api = new Api();

/* export const ws = new WebsocketBuilder(
  `${apiUrl.replace("http://", "ws://").replace("https://", "wss://")}/ws`
).build(); */
