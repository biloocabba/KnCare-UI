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
  role?: Role;
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
  subject: string;
  content: string;
  groups?: string[];
  businessUnits?: string[];
  roles?: string[];
  countries?: string[];
  recipients: string[];
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
