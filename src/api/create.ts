import { postDataApi } from "./actions";
import { URL_CONSTANTS } from "./urls";
import { hostConfig } from "../config/index";

export const demoBooking = (payload: any) => {
  return postDataApi(URL_CONSTANTS.bookDemo, payload);
};

export const createApplication = (params: any) => {
  return postDataApi(URL_CONSTANTS.applications, params);
};

export const subscribeNewsletter = async (payload: { name: string; email: string }) => {
  const response = await fetch(`${hostConfig.API_URL}${URL_CONSTANTS.newsletter}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
};
