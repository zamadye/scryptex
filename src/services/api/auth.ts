import { ApiResponse } from "../types";
import { handleApiError } from "../utils";
import { BASE_URL } from "../constants";

export const login = async (username: string, password: string): Promise<ApiResponse<any>> => {
  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.data.access_token) {
      localStorage.setItem("token", data.data.access_token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      localStorage.setItem("isLoggedIn", "true");
    }

    return data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const signup = async (userData: { username: string; email: string; password: string; wallet_address?: string }): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Signup failed: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.data.access_token) {
      localStorage.setItem("token", data.data.access_token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      localStorage.setItem("isLoggedIn", "true");
    }

    return data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "/login";
};