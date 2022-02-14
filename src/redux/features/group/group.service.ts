import { Group } from "types";

import { GROUP_ROUTE, httpCommon, HttpResponseType, IPartiallyUpdated, IUpdated } from "..";

const findAll = (): HttpResponseType => {
  return httpCommon.get(`${GROUP_ROUTE}`);
};

const findById = (id: number): HttpResponseType => {
  return httpCommon.get(`${GROUP_ROUTE}/${id}`);
};

const create = (body: Partial<Group>): HttpResponseType => {
  return httpCommon.post(`${GROUP_ROUTE}`, body);
};

const update = (updatedGroup: IUpdated<Group>): HttpResponseType => {
  const { id, body } = updatedGroup;
  return httpCommon.put(`${GROUP_ROUTE}/${id}`, body);
};

const partialUpdate = (partiallyUpdatedGroup: IPartiallyUpdated<Group>): HttpResponseType => {
  const { id, body } = partiallyUpdatedGroup;
  return httpCommon.patch(`${GROUP_ROUTE}/${id}`, body);
};

const deleteItem = (id: number) => {
  return httpCommon.delete(`${GROUP_ROUTE}/${id}`);
};

export const groupService = {
  findAll,
  findById,
  create,
  update,
  partialUpdate,
  deleteItem,
};
