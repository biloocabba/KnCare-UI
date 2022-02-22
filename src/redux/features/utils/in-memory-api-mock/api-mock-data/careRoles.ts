import { Role } from "types/security";

import { CareRole } from "types";

export const careRoles: CareRole[] = [
  { id: 1, name: "Regional Transformation Manager", role: Role.RegionalManager },
  { id: 2, name: "Country Transformation Manager", role: Role.CountryManager },
  { id: 3, name: "Advocate", role: Role.Advocate },
  { id: 4, name: "Trainer", role: Role.Trainer },
  { id: 5, name: "Sponsor", role: Role.Sponsor },
];
