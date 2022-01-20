import { AxiosResponse } from "axios";

import { CareRole } from "types/domain";

import { IUpdated, httpCommon } from "redux/features";

const findAll = (): Promise<AxiosResponse<CareRole[]>> => {
  return httpCommon.get(`/roles`);
};

const findById = (id: number): Promise<AxiosResponse<CareRole>> => {
  return httpCommon.get(`/roles/${id}`);
};

const create = (body: Partial<CareRole>): Promise<AxiosResponse<CareRole>> => {
  return httpCommon.post(`/roles`, body);
};

const update = (updatedGroup: IUpdated<CareRole>): Promise<AxiosResponse<CareRole>> => {
  const { id, body } = updatedGroup;
  return httpCommon.put(`/roles/${id}`, body);
};

const remove = (id: number) => {
  return httpCommon.delete(`/roles/${id}`);
};

export const roleService = {
  findAll,
  findById,
  create,
  update,
  remove,
};
