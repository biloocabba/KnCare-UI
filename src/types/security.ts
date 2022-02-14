export enum Role {
  RegionalManager = 6,
  CountryManager = 5,
  Advocate = 4,
  Trainer = 3,
  Sponsor = 2,
  Anonymous = 1,
}

export enum Permission {
  Employee_read,
  Employee_country_all,
  CareMember_read,
  CareMember_write,
  CareMember_country_all,
  BestPractice_read,
  BestPractice_write,
  Group_read,
  Group_write,
  Group_country_all,
  Group_user_all,
  Email_write,
  Email_country_all,
  Dashboard_worldview_read,
  Dashboard_statistics_read,
  Dashboard_statistics_country_all,
}

export type PolicyMap = {
  [role in Role]: Permission[];
};
