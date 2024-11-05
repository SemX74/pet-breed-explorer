export const createFullUrl = (relativePath: string, baseUrl?: string) => {
  if (!baseUrl) return relativePath;

  if (!baseUrl.endsWith("/")) {
    baseUrl += "/";
  }

  const res = new URL(relativePath, baseUrl).toString();
  return res;
};
