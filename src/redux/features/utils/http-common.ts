// import axios from "axios";
import { AxiosResponse } from "axios";

import { httpCommonMock } from "./in-memory-api-mock/http-common-mock";

// export const httpCommon = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
//   headers: {
//     "Content-type": "application/json",
//     Accept: "application/json",
//   },
// });

export const httpCommon = httpCommonMock;

export type HttpResponseType = Promise<AxiosResponse<any>>;
