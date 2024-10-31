import { ITour } from "@/types";

interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: Record<string, any>;
}

export async function fetchTours(options: FetchOptions = {}): Promise<ITour[]> {
  const { method = "GET", headers = {}, body } = options;

  try {
    const res = await fetch("http://localhost:8080/api/v1/tours");

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to fetch tours");
    }

    const responseData = await res.json();

    return responseData.data?.data || [];
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("An error occurred while fetching tours");
  }
}
