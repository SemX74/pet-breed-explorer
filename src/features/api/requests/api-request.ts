import { APP_URL } from "../constants";
import { requestMethod } from "./helpers/request-method";

export const apiRequest = () => {
  const headers = {
    Accept: "application/json",
  };

  const APP_API_URL = APP_URL + "/api";

  return {
    get: requestMethod("GET", headers, APP_API_URL),
    post: requestMethod("POST", headers, APP_API_URL),
    put: requestMethod("PUT", headers, APP_API_URL),
    delete: requestMethod("DELETE", headers, APP_API_URL),
    patch: requestMethod("PATCH", headers, APP_API_URL),
  };
};
