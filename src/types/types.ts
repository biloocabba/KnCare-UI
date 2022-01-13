import { ReactNode } from "react";

export interface Employee {
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
  endDate: string;
  dateOfLeave: string;
  nationality: string;
  officeAddressCity: string;
  officeAddressStreet: string;
  officeAddressCountry: string;
  onboardingDate: string;
  offboardingDate: string;
  groups: Group[];
  role: CareRole;
}

export interface CareRole {
  id: number;
  name: string;
}

export interface BusinessUnit {
  id: number;
  name: string;
}

export interface Group {
  id: number;
  name: string;
  active: boolean;
  members: number[];
  description: string;
}

export interface Country {
  code: string;
  code3: string;
  name: string;
  number: string;
}

export interface Chart {
  label: string;
  value?: number;
  values?: number[];
}

export type LayoutType = "/admin" | "/auth";

export interface IRoute {
  collapse?: boolean;
  name?: string;
  icon?: string;
  state?: string;
  views?: IRoute[];
  miniName?: string;
  global?: boolean;
  path?: string;
  component?: ReactNode;
  layout?: LayoutType;
}

export type Theme = "light" | "dark";