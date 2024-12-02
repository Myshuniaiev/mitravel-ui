export interface IFetchResponse<T> {
  data?: { data: T };
  totalCount?: number;
  results?: number;
  status?: string;
  token?: string
  message?: string
}

export interface IRequest extends RequestInit {
  url: string;
  params?: Record<string, string>;
}

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION;
const apiUrl = `${apiDomain}/api/${apiVersion}`;

export async function request<T>(init: IRequest): Promise<IFetchResponse<T>> {
  const { url, params, ..._init } = init;

  try {
    const newUrl = new URL(`${apiUrl}/${url}`);

    console.log("Login attempt with:", _init.body); // Log the input values

    if (params) {
      Object.keys(params).forEach((key) =>
        newUrl.searchParams.append(key, params[key])
      );
    }

    const res = await fetch(newUrl.toString(), _init);

    if (!res.ok) {
      const errorData = await res.json();

      alert(errorData.message || "Failed");
    }

    const responseData = await res.json();

    return responseData;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("An error occurred");
  }
}
