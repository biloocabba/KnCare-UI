import { AuthorizationPolicies } from "variables/rbac.config";

import { Permission, Role } from "./security";

export const toFileArray = (filelist: FileList | null): File[] => {
  if (!filelist || filelist.length === 0) {
    return [];
  }
  const files: File[] = [];
  for (let i = 0; i < filelist.length; i++) {
    const fileOrNull = filelist.item(i);
    if (fileOrNull) {
      files.push(fileOrNull);
    }
  }
  return files;
};

export const formDataCsvToArray = (commaSeparatedValues: string): string[] => {
  if (!commaSeparatedValues) {
    return [];
  }
  return commaSeparatedValues.split(",");
};

export const toFormData = (object: any): FormData => {
  const formData = new FormData();

  for (const key in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (!object.hasOwnProperty(key) || typeof object[key] == "function") continue;
    formData.append(key, object[key]);
  }
  return formData;
};

export const toRoleEnum = (role: string): Role => {
  switch (role) {
    case "RegionalTransformationManager":
      return Role.RegionalManager;
    case "CountryTransformationManager":
      return Role.CountryManager;
    case "Advocate":
      return Role.Advocate;
    case "Trainer":
      return Role.Trainer;
    case "Sponsor":
      return Role.Sponsor;

    default:
      throw Error("Illegal value for tole. Found: " + role);
  }
};

const getPermissionForRole = (role: Role): Permission[] => {
  return AuthorizationPolicies[role];
};

export const checkAuthorized = (role: Role, required: Permission): boolean => {
  const permissions = getPermissionForRole(role);
  const foundPermission = permissions.find(permission => permission === required);
  return foundPermission ? true : false;
};

export const toBoolean = (value: string | number | boolean | null | undefined): boolean => {
  if (value == null || value == undefined) {
    return false;
  }
  return [true, "true", "True", "TRUE", "1", 1].includes(value);
};
