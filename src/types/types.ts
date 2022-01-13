
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
