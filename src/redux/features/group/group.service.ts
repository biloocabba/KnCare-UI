import { AxiosResponse } from "axios";

import { Group } from "types/domain";

import { httpCommon } from "..";

import { IPartiallyUpdatedGroup, IUpdatedGroup } from ".";

const getAllGroups = (): Promise<AxiosResponse<Group[]>> => {
  return httpCommon.get(`/groups`);
};

const getGroupById = (id: number): Promise<AxiosResponse<Group>> => {
  return httpCommon.get(`/groups/${id}`);
};

const createGroup = (body: Partial<Group>): Promise<AxiosResponse<Group>> => {
  return httpCommon.post(`/groups`, body);
};

const updateGroup = (updatedGroup: IUpdatedGroup): Promise<AxiosResponse<Group>> => {
  const { id, body } = updatedGroup;
  return httpCommon.put(`/groups/${id}`, body);
};

const partialUpdateGroup = (
  partiallyUpdatedGroup: IPartiallyUpdatedGroup
): Promise<AxiosResponse<Group>> => {
  const { id, body } = partiallyUpdatedGroup;
  return httpCommon.patch(`/groups/${id}`, body);
};

const deleteGroup = (id: number) => {
  return httpCommon.delete(`/groups/${id}`);
};

export const groupService = {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  partialUpdateGroup,
  deleteGroup,
};
