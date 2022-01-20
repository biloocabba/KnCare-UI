import { BestPractice } from "types";

import { httpCommon, IUpdated, PRACTICES } from "redux/features";
import { HttpResponseType } from "redux/features/utils";

const findAll = (): HttpResponseType => {
  return httpCommon.get(`${PRACTICES}`);
};

const findById = (id: number): HttpResponseType => {
  return httpCommon.get(`${PRACTICES}/${id}`);
};

const create = (body: Partial<BestPractice>): HttpResponseType => {
  return httpCommon.post(`${PRACTICES}`, body);
};

const update = (updatedBestPractice: IUpdated<BestPractice>): HttpResponseType => {
  const { id, body } = updatedBestPractice;
  return httpCommon.put(`${PRACTICES}/${id}`, body);
};

const remove = (id: number) => {
  return httpCommon.delete(`${PRACTICES}/${id}`);
};

export const bestPracticeService = {
  findAll,
  findById,
  create,
  update,
  remove,
};
