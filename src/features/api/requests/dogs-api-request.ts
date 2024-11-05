import { DOGS_API_ENDPOINT } from "../constants";
import { requestMethod } from "./helpers/request-method";

export const dogsApiRequest = () => {
  const headers = {
    Accept: "application/json",
    'x-api-key': process.env.DOGS_API_KEY!,
  };

  return {
    get: requestMethod("GET", headers, DOGS_API_ENDPOINT),
    post: requestMethod("POST", headers, DOGS_API_ENDPOINT),
    put: requestMethod("PUT", headers, DOGS_API_ENDPOINT),
    delete: requestMethod("DELETE", headers, DOGS_API_ENDPOINT),
    patch: requestMethod("PATCH", headers, DOGS_API_ENDPOINT),
  };
};
