import { createFullUrl } from "./create-full-url";

export function requestMethod(
  method: string,
  defaultHeaders: Record<string, string>,
  baseUrl?: string
) {
  return async (url: string) => {
    const requestOptions: RequestInit = {
      method,
      headers: defaultHeaders,
    };

    const targetUrl = createFullUrl(url, baseUrl);

    const response = await fetch(targetUrl, requestOptions);

    if (!response.ok) {
      Promise.reject(response);
    }

    const text = await response.text();

    if (!text || !text.trim()) {
      console.warn("Empty response");
      return null;
    }

    try {
      return JSON.parse(text);
    } catch (e: any) {
      console.error("Failed to parse response", e.message);
      return null;
    }
  };
}
