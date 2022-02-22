import { IUpdated } from "redux/features/common";

import { CareMemberSaveRequest } from "types";

import { httpCommon, HttpResponseType } from "../utils/http-common";

const searchCareMembers = (queryParams: URLSearchParams): HttpResponseType => {
  return httpCommon.get(`/care-member?${queryParams}`);
};

const getCareMemberById = (id: number): HttpResponseType => {
  return httpCommon.get(`/care-member/${id}`);
};

const searchCareMembersByIds = (ids: number[]): HttpResponseType => {
  return httpCommon.get(`/care-member/group/members/${ids}`);
};

const createCareMember = (body: CareMemberSaveRequest): HttpResponseType => {
  return httpCommon.post(`/care-member`, body);
};

const updateCareMember = (updatedCareMember: IUpdated<CareMemberSaveRequest>): HttpResponseType => {
  const { id, body } = updatedCareMember;
  console.log(body);
  return httpCommon.put(`/care-member/${id}`, body);
};

// const partialUpdateCareMember = (
//   partiallyUpdatedCareMember: IPartiallyUpdated<CareMember>,
// ): HttpResponseType => {
//   const { id, body } = partiallyUpdatedCareMember;
//   return httpCommon.patch(`/care-member/${id}`, body);
// };

const deleteCareMember = (id: number): HttpResponseType => {
  return httpCommon.delete(`/care-member/${id}`);
};

export const careMemberService = {
  searchCareMembers,
  searchCareMembersByIds,
  getCareMemberById,
  createCareMember,
  updateCareMember,
  deleteCareMember,
};
