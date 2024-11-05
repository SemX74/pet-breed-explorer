import { CATS_API_ENDPOINT } from "../constants";
import { requestMethod } from "./helpers/request-method";

export const catsApiRequest = () => {
  const headers = {
    Accept: "application/json",
    "x-api-key": process.env.CATS_API_KEY!,
  };

  return {
    get: requestMethod("GET", headers, CATS_API_ENDPOINT),
    post: requestMethod("POST", headers, CATS_API_ENDPOINT),
    put: requestMethod("PUT", headers, CATS_API_ENDPOINT),
    delete: requestMethod("DELETE", headers, CATS_API_ENDPOINT),
    patch: requestMethod("PATCH", headers, CATS_API_ENDPOINT),
  };
};
