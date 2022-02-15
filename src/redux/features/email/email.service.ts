import { Email, EmailSaveRequest } from "types";
import { toFormData } from "types/utils";

import { httpCommon, IUpdated, EMAIL_ROUTE, HttpResponseType } from "redux/features";

const findAll = (): HttpResponseType => {
  return httpCommon.get(`${EMAIL_ROUTE}`);
};

const findById = (id: number): HttpResponseType => {
  return httpCommon.get(`${EMAIL_ROUTE}/${id}`);
};

const saveAsDraft = (email: EmailSaveRequest): HttpResponseType => {
  const bodyAsFormData = toFormData(email);
  return httpCommon.post(`${EMAIL_ROUTE}`, bodyAsFormData);
};

const create = (email: EmailSaveRequest): HttpResponseType => {
  const bodyAsFormData = toFormData(email);
  return httpCommon.post(`${EMAIL_ROUTE}`, bodyAsFormData);
};

const search = (queryParams: URLSearchParams): HttpResponseType => {
  return httpCommon.get(`${EMAIL_ROUTE}?${queryParams}`);
};

const send = (body: Email): HttpResponseType => {
  return httpCommon.post(`${EMAIL_ROUTE}/send`, body);
};

const update = (updatedEmail: IUpdated<EmailSaveRequest>): HttpResponseType => {
  const { id, body } = updatedEmail;
  return httpCommon.put(`${EMAIL_ROUTE}/${id}`, body);
};

const remove = (id: number) => {
  return httpCommon.delete(`${EMAIL_ROUTE}/${id}`);
};

export const emailService = {
  findAll,
  findById,
  create,
  saveAsDraft,
  search,
  send,
  update,
  remove,
};
