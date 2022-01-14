import { ReactNode } from "react";


export interface Domain {}
export interface Employee extends Domain{
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
  nationality: string| null;
  officeAddressCity: string| null;
  officeAddressStreet: string| null;
  officeAddressCountry: string| null;
}

export interface CareMember extends Employee{
  onboardingDate: string;
  offboardingDate: string | null;
  groups?: number[];
  role: CareRole;
}

export interface CareRole extends Domain{
  id: number;
  name: string;
}

export interface BusinessUnit extends Domain{
  id: number;
  name: string;
}

export interface Group extends Domain{
  id: number;
  name: string;
  active: boolean;
  members: number[];
  description: string;
}

export interface Country extends Domain{
  code: string;
  code3: string;
  name: string;
  number: string;
}

export interface Chart extends Domain{
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