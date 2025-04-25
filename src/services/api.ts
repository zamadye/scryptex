import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});

export const joinWaitlist = async (data: {
  email: string;
  username: string;
  ref?: string;
}) => {
  const res = await api.post("/api/waitlist", data);
  return res.data;
};