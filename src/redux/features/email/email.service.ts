import { toFormData } from "types/utils";

import { httpCommon, IUpdated, EMAIL_ROUTE, HttpResponseType } from "redux/features";

import { Email, EmailSaveRequest } from "types";

const findAll = (): HttpResponseType => {
  return httpCommon.get(`${EMAIL_ROUTE}`);
};

const findById = (id: number): HttpResponseType => {
  return httpCommon.get(`${EMAIL_ROUTE}/${id}`);
};

const save = (email: EmailSaveRequest): HttpResponseType => {
  const bodyAsFormData = toFormData(email);
  return httpCommon.post(`${EMAIL_ROUTE}`, bodyAsFormData);
};

const send = (body: Email): HttpResponseType => {
  return httpCommon.post(`${EMAIL_ROUTE}/send`, body);
};

const search = (queryParams: URLSearchParams): HttpResponseType => {
  return httpCommon.get(`${EMAIL_ROUTE}?${queryParams}`);
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
  save,
  search,
  send,
  update,
  remove,
};
