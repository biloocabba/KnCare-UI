export interface CareMemberSaveRequest {
  id: number;
  onboardingDate: string;
  offboardingDate: string;
  employeeId: number;
  roleId?: number;
  groupIds?: number[];
}

export interface EmployeeQueryFilters {
  lastName?: string;
  businessUnitId?: number;
  countryIsoCode3?: string;
  hiringDate?: string;
}

export interface CareMemberQueryFilters {
  businessUnitId?: number;
  countryIsoCode3?: string;
  roleId?: number;
  groupId?: number;
  lastName?: string;
  onboardDateFrom?: string;
  onboardDateTo?: string;
  offboardingDateFrom?: string;
  offboardingDateTo?: string;
}

export interface Chart {
  label: string;
  value?: number;
  values?: number[];
}
