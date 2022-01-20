import { AxiosResponse } from "axios";

import { BestPractice } from "types";

import { IUpdated, httpCommon, PRACTICES } from "redux/features";

const findAll = (): Promise<AxiosResponse<BestPractice[]>> => {
  return httpCommon.get(`${PRACTICES}`);
};

const findById = (id: number): Promise<AxiosResponse<BestPractice>> => {
  return httpCommon.get(`${PRACTICES}/${id}`);
};

const create = (body: Partial<BestPractice>): Promise<AxiosResponse<BestPractice>> => {
  return httpCommon.post(`${PRACTICES}`, body);
};

const update = (
  updatedBestPractice: IUpdated<BestPractice>
): Promise<AxiosResponse<BestPractice>> => {
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
