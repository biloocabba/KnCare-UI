import { Group } from "types/domain";

import { httpCommon, HttpResponseType } from "..";
import { IPartiallyUpdated, IUpdated } from "../common";

const findAll = (): HttpResponseType => {
  return httpCommon.get(`/group`);
};

const findById = (id: number): HttpResponseType => {
  return httpCommon.get(`/group/${id}`);
};

const create = (body: Partial<Group>): HttpResponseType => {
  return httpCommon.post(`/group`, body);
};

const update = (updatedGroup: IUpdated<Group>): HttpResponseType => {
  const { id, body } = updatedGroup;
  return httpCommon.put(`/group/${id}`, body);
};

const partialUpdate = (partiallyUpdatedGroup: IPartiallyUpdated<Group>): HttpResponseType => {
  const { id, body } = partiallyUpdatedGroup;
  return httpCommon.patch(`/group/${id}`, body);
};

const deleteItem = (id: number) => {
  return httpCommon.delete(`/group/${id}`);
};

export const groupService = {
  findAll,
  findById,
  create,
  update,
  partialUpdate,
  deleteItem,
};
