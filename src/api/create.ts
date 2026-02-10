import { postDataApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

export const demoBooking = (payload: any) => {
  return postDataApi(URL_CONSTANTS.bookDemo, payload);
};

export const createApplication = (params: any) => {
  return postDataApi(URL_CONSTANTS.applications, params);
};
