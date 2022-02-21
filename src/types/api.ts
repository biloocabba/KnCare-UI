import moment from "moment";

export interface CareMemberSaveRequest {
  id: number;
  onboardingDate: string;
  offboardingDate: string;
  employeeId: number;
  roleId?: number;
  groupIds?: number[];
}

export interface GroupSaveRequest {
  id: number;
  name: string;
  active: boolean;
  members: number[];
  description: string;
}

export interface EmailSaveRequest {
  subject: string;
  content: string;
  businessUnitIds?: number[];
  countryIso3?: string[];
  groupIds?: number[];
  recipientIds: number[];
  roleIds?: number[];
}

export interface EmployeeQueryFilters {
  lastName?: string;
  businessUnitId?: number;
  countryId?: string;
  jobTitle?: string;
  hiringDate?: string;
}
export interface EmailQueryFilters {
  businessUnitId?: number;
  countryId?: string;
  roleId?: string;
  groupId?: number;
  sendingDateFrom?: moment.Moment;
  sendingDateTo?: moment.Moment;
  searchSubject?: string;
}
export interface GroupQueryFilters {
  active?: boolean;
}
export interface BestPracticesQueryFilters {
  searchAuthor?: string;
  searchTag?: string;
  searchRating?: string;
  searchTitle?: string;
  searchPublishDate?: moment.Moment;
}

export interface CareMemberQueryFilters {
  businessUnitId?: number;
  countryIso3?: string;
  roleId?: number;
  groupId?: number;
  lastName?: string;
  onboardDateFrom?: moment.Moment;
  onboardDateTo?: moment.Moment;
  offboardingDateFrom?: moment.Moment;
  offboardingDateTo?: moment.Moment;
}

export interface Chart {
  label: string;
  value: number;
  values?: number[];
}

export interface TurnoverChart {
  month: string;
  onboarded: number;
  offboarded: number;
}

export interface ApiResponse<T> {
  isError: boolean;
  message: string;
  code?: number;
  data?: T;
}

export interface LoginBody {
  email: string;
  password: string;
}
