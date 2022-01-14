// import axios from "axios";
import { httpCommonMock } from "./in-memory-api-mock/http-common-mock";


// export const httpCommon = axios.create({
//   baseURL: "http://localhost:8000",
//   headers: {
//     "Content-type": "application/json",
//     Accept: "application/json",
//   },
// });

export const httpCommon = httpCommonMock;
