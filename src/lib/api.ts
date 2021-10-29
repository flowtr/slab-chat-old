import axios from "axios";

export const apiUrl =
  import.meta.env.API_URI?.toString() ?? "http://localhost:8080";

export const api = axios.create({ baseURL: apiUrl });
