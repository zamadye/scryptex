import axios from "axios";
import { ApiResponse } from "../types";
import { BASE_URL } from "../constants";

export const joinWaitlist = async (data: {
  email: string;
  username: string;
  ref?: string;
}): Promise<ApiResponse<any>> => {
  try {
    const response = await axios.post(`${BASE_URL}/api/waitlist`, data);
    return response.data;
  } catch (error) {
    console.error("Failed to join waitlist:", error);
    throw error;
  }
};

export const getReferralInfo = async (code: string): Promise<ApiResponse<any>> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/waitlist/${code}`);
    return response.data;
  } catch (error) {
    console.error("Failed to get referral info:", error);
    throw error;
  }
};