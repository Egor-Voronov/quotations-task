import { API_URL } from "@/shared/config";
import type { ApiResponse } from "./base.types.ts";

export class ApiClient {
  private readonly baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  private async handleResponse<TResult>(response: Response): Promise<TResult> {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new Error("Error parsing JSON response");
    }
  }

  public async get<TResult = unknown>(
    endpoint: string,
    queryParams?: Record<string, string | number>,
  ): Promise<ApiResponse<TResult>> {
    const url = new URL(endpoint, this.baseUrl);

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString());
      });
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // this headers blocking cors
    });

    return this.handleResponse<ApiResponse<TResult>>(response);
  }
}
export const apiClient = new ApiClient(API_URL);
