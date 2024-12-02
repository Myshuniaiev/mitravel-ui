export interface IFetchResponse<T> {
  data: { data: T };
  totalCount?: number;
  results?: number;
  status?: string;
}

export interface IOptions {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: Record<string, any>;
  params?: Record<string, string>;
}

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION;
const apiUrl = `${apiDomain}/api/${apiVersion}`;

export async function request<T>(
  options: IOptions
): Promise<IFetchResponse<T>> {
  const { url: optionsUrl, method = "GET", headers, body, params } = options;

  try {
    const url = new URL(`${apiUrl}/${optionsUrl}`);

    const res = await fetch(url.toString(), { method });

    if (!res.ok) {
      const errorData = await res.json();

      throw new Error(errorData.message || "Failed to fetch tours");
    }

    const responseData = await res.json();

    return responseData;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("An error occurred while fetching tours");
  }
}
