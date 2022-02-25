// import axios from "axios";
import { AxiosResponse } from "axios";

import { ApiResponse } from "types";
import { GENERIC_ERROR_CODE } from "variables/app.consts";

import { httpCommonMock } from "./in-memory-api-mock/http-common-mock";

// export const httpCommon = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
//   headers: {
//     "Content-type": "application/json",
//     Accept: "application/json",
//   },
// });

export const httpCommon = httpCommonMock;

export const handleGetApiRequestInternal = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const { data, status, statusText } = await httpCommon.get(url);

    if (status !== 200) {
      return {
        code: status,
        message: statusText,
        isError: true,
      };
    }
    const responseOk = {
      code: status,
      message: statusText,
      data: data,
      isError: false,
    };

    return responseOk;
  } catch (err: any) {
    return {
      message: err.message,
      code: GENERIC_ERROR_CODE,
      isError: true,
    };
  }
};

export type HttpResponseType = Promise<AxiosResponse<any>>;
