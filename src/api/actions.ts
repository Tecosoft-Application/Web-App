import { hostConfig } from "../config/index";

const responseHandler = (response: any) => {
  if (response.status === 200 || response.status === 201) {
    return response;
  }
  else if (response.status === 400) {
    return response;
  }
  else if (response.status === 409) {
    return { error: response.detail || "Email is already Exist" };
  } else {
    return false;
  }
};

const errorHandler = (error: any) => {
  if (error.status === 409) {
    return error;
  } else {
    return false;

  }
};

const postDataApi = async (requestUrl: string, params: any) => {
  const isFormData = params instanceof FormData;

  try {
    const response = await fetch(`${hostConfig.API_URL}${requestUrl}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
      },
      body: isFormData ? params : JSON.stringify(params),
    });
    console.log(response, 5656565555);

    return responseHandler(response);
  } catch (error) {
    console.log(error, 676767676676767);

    errorHandler(error);
  }
};

const getListByApi = (requestUrl: any, params: any) => {
  let getParams = "?";

  if (params && params.search && params.search !== undefined) {
    getParams += `search=${params.search}`;
  }

  if (params && params.pageLimit && params.pageLimit !== undefined) {
    getParams += `&limit=${params.pageLimit}`;
  }

  if (params && params.skip && params.skip !== undefined) {
    getParams += `&skip=${params.skip}`;
  }

  if (params && params.page && params.page !== undefined) {
    getParams += `&page=${params.page}`;
  }

  if (params && params.status && params.status !== undefined) {
    getParams += `&status=${params.status}`;
  }

  if (params && params.type && params.type !== undefined) {
    getParams += `&type=${params.type}`;
  }


  return fetch(`${hostConfig.API_URL}${requestUrl}${getParams}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return responseHandler(response);
    })
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      errorHandler(error);
    });
};

const viewDataByApi = async (requestUrl: any, dataId: any) => {
  const token = await localStorage.getItem("token");
  return fetch(`${hostConfig?.API_URL}${requestUrl}/${dataId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      return responseHandler(response);
    })
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export { postDataApi, getListByApi, viewDataByApi };
