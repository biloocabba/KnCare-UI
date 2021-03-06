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
  countryIso3?: string;
  jobTitle?: string;
  hiringDateFrom?: string;
  newMembersOnly?: boolean;
}
export interface EmailQueryFilters {
  businessUnitId?: number;
  countryIso3?: string;
  roleId?: string;
  groupId?: number;
  sendingDateFrom?: string;
  sendingDateTo?: string;
  searchSubject?: string;
}
export interface GroupQueryFilters {
  active?: boolean;
}
export interface BestPracticesQueryFilters {
  author?: string;
  tag?: string;
  rating?: number;
  title?: string;
  publishDate?: string;
}

export interface CareMemberQueryFilters {
  businessUnitId?: number;
  countryIso3?: string;
  roleId?: number;
  groupId?: number;
  lastName?: string;
  onboardDateFrom?: string;
  onboardDateTo?: string;
  offboardingDateFrom?: string;
  offboardingDateTo?: string;
  members?: number[];
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
