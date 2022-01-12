import { Group } from "types/types";
import { httpCommon } from "..";
import { IPartiallyUpdatedGroup, IUpdatedGroup } from ".";

const getAllGroups = () => {
  return httpCommon.get(`/groups`);
};

const getGroupById = (id: number) => {
  return httpCommon.get(`/groups/${id}`);
};

const createGroup = (body: Group) => {
  return httpCommon.post(`/groups`, body);
};

const updateGroup = (updatedGroup: IUpdatedGroup) => {
  const { id, body } = updatedGroup;
  return httpCommon.put(`/groups/${id}`, body);
};

const partialUpdateGroup = (
  partiallyUpdatedGroup: IPartiallyUpdatedGroup,
) => {
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
