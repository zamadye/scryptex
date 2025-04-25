import { ApiResponse } from "../types";
import { handleApiError, getAuthHeaders } from "./utils";
import { BASE_URL } from "./constants";

export const createTwitterPost = async (projectId: string, topic: string, tone: string = "informative"): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${BASE_URL}/api/twitter/post?project_id=${projectId}&topic=${topic}&tone=${tone}`, {
      method: "POST",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to create Twitter post: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return handleApiError(error);
  }
};

export const connectTwitterAccount = async (twitterHandle: string): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${BASE_URL}/api/twitter/connect?twitter_handle=${twitterHandle}`, {
      method: "POST",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to connect Twitter account: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return handleApiError(error);
  }
};