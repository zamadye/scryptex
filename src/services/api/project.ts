import { ApiResponse } from "../types";
import { handleApiError, getAuthHeaders } from "../utils";
import { BASE_URL } from "../constants";

export const analyzeProject = async (data: { project_name: string; website: string }): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${BASE_URL}/api/analyze`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to analyze project: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return handleApiError(error);
  }
};

export const getProjectAnalysis = async (projectId: string): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${BASE_URL}/api/analyze/${projectId}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to get project analysis: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return handleApiError(error);
  }
};