import { Role } from "./security";

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
  birthDate: string;
  companyPhone: string;
  companyMobilePhone: string;
  gender: string;
  startDate: string;
  endDate?: string | null;
  dateOfLeave: string | null;
  nationality: string | null;
  office: {
    countryiso3: string;
    city: string;
    street: string;
    country: string;
    postalCode: string;
  };
  careMember: boolean;
}

export interface CareMember extends Employee {
  employeeId: number;
  onboardingDate: string | null;
  offboardingDate: string | null;
  groups?: number[];
  roleId?: number;
}

export interface CareRole extends Domain {
  id: number;
  name: string;
  role?: Role;
}

export interface BusinessUnit extends Domain {
  id: number;
  name: string;
}
export interface JobTitle extends Domain {
  id: number;
  name: string;
}

export interface BestPractice extends Domain {
  id: number;
  title: string;
  description: string;
  author: string;
  publishDate: string;
  rating: number;
  tags?: string[];
  imageUrl?: string;
  contentUrl?: string;
  contentFiles?: File[];
}

export interface Group extends Domain {
  id: number;
  name: string;
  active: boolean;
  members: number[];
  description: string;
}

export interface Email extends Domain {
  id: number;
  subject: string;
  content: string;
  groups?: number[];
  businessUnits?: number[];
  roles?: number[];
  countries?: string[];
  recipients: number[];
  sendingDate: string;
}
export interface Country extends Domain {
  code: string;
  code3: string;
  name: string;
  number: string;
}

export interface Principal extends Domain {
  fullName: string;
  username: string;
  email: string;
  jwtToken: string;
  countryCode3: string;
  authRole: Role;
  role: string;
  imageUrl?: string;
}
export interface WorldOverviewCachedReports extends Domain {
  reportName: string;
  data: WorldDataReport;
}

export declare type WorldDataReport = {
  [countryCode: string]: number;
};
