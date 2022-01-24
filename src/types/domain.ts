// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Domain {}
export interface Employee extends Domain {
  id: number;
  pdmId: number;
  firstName: string;
  lastName: string;
  internationalName: string;
  title: string;
  email: string;
  businessUnit: string;
  managementGroup: string;
  companyCode: string;
  costCenter: string;
  country: string;
  birthDate: string;
  companyPhone: string;
  companyMobilePhone: string;
  gender: string;
  startDate: string;
  endDate?: string | null;
  dateOfLeave: string | null;
  nationality: string | null;
  officeAddressCity: string | null;
  officeAddressStreet: string | null;
  officeAddressCountry: string | null;
  officeAddressPostalCode: string | null;
}

export interface CareMember extends Employee {
  employeeId: number;
  onboardingDate: string;
  offboardingDate: string;
  groups?: Group[];
  groupIds?: number[];
  roleId?: number;
  role?: CareRole;
}

export interface CareRole extends Domain {
  id: number;
  name: string;
}

export interface BusinessUnit extends Domain {
  id: number;
  name: string;
}

export interface BestPractice extends Domain {
  id: number;
  title: string;
  description: string;
  author: string;
  publishDate: Date;
  rating: number;
  tags: string[];
  pdf: string;
}

export interface Group extends Domain {
  id: number;
  name: string;
  active: boolean;
  members: number[];
  description: string;
}

export interface Country extends Domain {
  code: string;
  code3: string;
  name: string;
  number: string;
}

// export type WorldOverviewCachedReports = Domain & {
//   [reportName in ReportName]: WorldDataReport;
// };

export interface WorldOverviewCachedReports extends Domain {
  reportName: string;
  data: WorldDataReport;
}

export declare type WorldDataReport = {
  [countryCode: string]: number;
};

export const NO_REPORT_CACHED: WorldDataReport = { NONE: 0 };
export const REPORT_KEY_ACTIVE_MEMBERS = "ActiveMembers";
export const REPORT_KEY_NEW_MEMBERS = "NewMembers";
export const REPORT_KEY_SELF_RESIGNED_MEMBERS = "SelfResignedMembers";
export const REPORT_KEY_AUTO_OFFBOARDED_MEMBERS = "AutoOffboardedMembers";
export const REPORT_KEY_CURRENT_MAP = "REPORT_KEY_CURRENT_MAP";
