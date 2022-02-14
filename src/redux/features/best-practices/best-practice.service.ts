import { BestPractice } from "types";
import { toFormData } from "types/utils";

import { httpCommon, IUpdated, BEST_PRACTICE_ROUTE, HttpResponseType } from "redux/features";

const findAll = (): HttpResponseType => {
  return httpCommon.get(`${BEST_PRACTICE_ROUTE}`);
};

const findById = (id: number): HttpResponseType => {
  return httpCommon.get(`${BEST_PRACTICE_ROUTE}/${id}`);
};

const create = (bestPractice: BestPractice): HttpResponseType => {
  const bodyAsFormData = toFormData(bestPractice);
  return httpCommon.post(`${BEST_PRACTICE_ROUTE}`, bodyAsFormData);
};

const search = (queryParams: URLSearchParams): HttpResponseType => {
  return httpCommon.get(`${BEST_PRACTICE_ROUTE}?${queryParams}`);
};

const update = (updatedBestPractice: IUpdated<BestPractice>): HttpResponseType => {
  const { id, body } = updatedBestPractice;
  return httpCommon.put(`${BEST_PRACTICE_ROUTE}/${id}`, body);
};

const remove = (id: number) => {
  return httpCommon.delete(`${BEST_PRACTICE_ROUTE}/${id}`);
};

export const bestPracticeService = {
  findAll,
  findById,
  create,
  search,
  update,
  remove,
};
