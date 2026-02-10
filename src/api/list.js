import { getListByApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

export const getBlogLatest = (params) => {
  return getListByApi(URL_CONSTANTS.blogLatest, params);
};

export const getBlogAll = (params) => {
  return getListByApi(URL_CONSTANTS.blogs, params);
}


export const getBlogDetails = (slug) => {
  return getListByApi("blogs/slug/" + slug, {});
}


export const getWhitePapersAll = (params) => {
  return getListByApi(URL_CONSTANTS.whitePapers, params);
}

export const getWhitePaperDetails = (slug) => {
  return getListByApi("whitepapers/" + slug, {});
}