import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Types
interface WaitlistPayload {
  email: string;
  username: string;
  ref?: string;
}

interface ReferralInfo {
  valid: boolean;
  referrer: {
    username: string;
    email: string;
  };
}

// API Functions
export const joinWaitlist = async (data: WaitlistPayload) => {
  try {
    const response = await api.post("/api/waitlist", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.detail || "Failed to join waitlist");
    }
    throw error;
  }
};

export const getReferralInfo = async (code: string): Promise<ReferralInfo> => {
  try {
    const response = await api.get(`/api/waitlist/${code}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.detail || "Invalid referral code");
    }
    throw error;
  }
};