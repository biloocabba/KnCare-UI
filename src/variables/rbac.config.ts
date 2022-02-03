import { CareRole } from "types";
import { Permission, PolicyMap, Role } from "types/security";

export const AnonymousPermissions: Permission[] = [];

export const SponsorPermissions: Permission[] = [
  ...AnonymousPermissions,
  Permission.Employee_read,
  Permission.CareMember_read,
  Permission.BestPractice_read,
];
export const TrainerPermissions: Permission[] = [...SponsorPermissions];

export const AdvocatePermissions: Permission[] = [
  ...TrainerPermissions,
  Permission.Group_write,
  Permission.Group_read,
  Permission.BestPractice_write,
];

export const CountryManagerPermissions: Permission[] = [
  ...AdvocatePermissions,
  Permission.CareMember_write,
  Permission.Email_write,
  Permission.Dashboard_worldview_read,
  Permission.Dashboard_statistics_read,
];

export const RegionalManagerPermissions: Permission[] = [
  ...CountryManagerPermissions,
  Permission.CareMember_country_all,
  Permission.Dashboard_statistics_country_all,
  Permission.Email_country_all,
  Permission.Employee_country_all,
  Permission.Group_country_all,
];

export const AuthorizationPolicies: PolicyMap = {
  [Role.Anonymous]: AnonymousPermissions,
  [Role.Sponsor]: SponsorPermissions,
  [Role.Trainer]: TrainerPermissions,
  [Role.Advocate]: AdvocatePermissions,
  [Role.CountryManager]: CountryManagerPermissions,
  [Role.RegionalManager]: RegionalManagerPermissions,
};

export const careRoles: CareRole[] = [
  { id: 1, name: "Regional Transformation Manager", role: Role.RegionalManager },
  { id: 2, name: "Country Transformation Manager", role: Role.CountryManager },
  { id: 3, name: "Advocate", role: Role.Advocate },
  { id: 4, name: "Trainer", role: Role.Trainer },
  { id: 5, name: "Sponsor", role: Role.Sponsor },
];
