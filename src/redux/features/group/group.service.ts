import { AxiosResponse } from "axios";

import { Group } from "types/domain";

import { httpCommon } from "..";

import { IPartiallyUpdatedGroup, IUpdatedGroup } from ".";

const findAll = (): Promise<AxiosResponse<Group[]>> => {
  return httpCommon.get(`/groups`);
};

const findById = (id: number): Promise<AxiosResponse<Group>> => {
  return httpCommon.get(`/groups/${id}`);
};

const create = (body: Partial<Group>): Promise<AxiosResponse<Group>> => {
  return httpCommon.post(`/groups`, body);
};

const update = (updatedGroup: IUpdatedGroup): Promise<AxiosResponse<Group>> => {
  const { id, body } = updatedGroup;
  return httpCommon.put(`/groups/${id}`, body);
};

const partialUpdate = (
  partiallyUpdatedGroup: IPartiallyUpdatedGroup
): Promise<AxiosResponse<Group>> => {
  const { id, body } = partiallyUpdatedGroup;
  return httpCommon.patch(`/groups/${id}`, body);
};

const deleteItem = (id: number) => {
  return httpCommon.delete(`/groups/${id}`);
};

export const groupService = {
  findAll,
  findById,
  create,
  update,
  partialUpdate,
  deleteItem,
};
