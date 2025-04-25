import { toast } from "@/hooks/use-toast";

export const handleApiError = (error: unknown) => {
  console.error("API Error:", error);

  let errorMessage = "An unexpected error occurred";

  if (error instanceof Response) {
    errorMessage = `Server error: ${error.status}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  toast({
    title: "Error",
    description: errorMessage,
    variant: "destructive",
  });

  return { success: false, message: errorMessage, data: null, timestamp: new Date().toISOString() };
};

export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token
    ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    : { "Content-Type": "application/json" };
};