import { AxiosResponse } from "axios";

import { CareRole } from "types/domain";

import { IUpdated, httpCommon } from "redux/features";

const findAll = (): Promise<AxiosResponse<CareRole[]>> => {
  return httpCommon.get(`/role`);
};

const findById = (id: number): Promise<AxiosResponse<CareRole>> => {
  return httpCommon.get(`/role/${id}`);
};

const create = (body: Partial<CareRole>): Promise<AxiosResponse<CareRole>> => {
  return httpCommon.post(`/role`, body);
};

const update = (updatedGroup: IUpdated<CareRole>): Promise<AxiosResponse<CareRole>> => {
  const { id, body } = updatedGroup;
  return httpCommon.put(`/role/${id}`, body);
};

const remove = (id: number) => {
  return httpCommon.delete(`/role/${id}`);
};

export const roleService = {
  findAll,
  findById,
  create,
  update,
  remove,
};
