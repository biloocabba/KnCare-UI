import { BestPractice } from "types";

import { httpCommon, IUpdated, BEST_PRACTICE_ROUTE, HttpResponseType } from "redux/features";

const findAll = (): HttpResponseType => {
  return httpCommon.get(`${BEST_PRACTICE_ROUTE}`);
};

const findById = (id: number): HttpResponseType => {
  return httpCommon.get(`${BEST_PRACTICE_ROUTE}/${id}`);
};

const create = (body: Partial<BestPractice>): HttpResponseType => {
  return httpCommon.post(`${BEST_PRACTICE_ROUTE}`, body);
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
