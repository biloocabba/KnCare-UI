import { Principal, Role } from "types";

const regionalManagerUser: Principal = {
  fullName: "Stefano Fiorenza",
  username: "stefanofiorenza",
  email: "stefano.fiorenza@kuehne-nagel.com",
  jwtToken: "abracadabra",
  countryCode3: "ITA",
  authRole: Role.RegionalManager,
  role: "RegionalTransformationManager",
};

const countryManagerUser: Principal = {
  fullName: "Piero Bortolotti",
  username: "pierobortolotti",
  email: "piero.bortolotti@kuehne-nagel.com",
  jwtToken: "abracadabra",
  countryCode3: "ITA",
  authRole: Role.CountryManager,
  role: "CountryTransformationManager",
};

const advocateUser: Principal = {
  fullName: "Federico Fusco",
  username: "federicofusco",
  email: "federico.fusco@kuehne-nagel.com",
  jwtToken: "abracadabra",
  countryCode3: "ITA",
  authRole: Role.Advocate,
  role: "Advocate",
};

const trainerUser: Principal = {
  fullName: "Tim Kirkpatrick",
  username: "timkirkpatrick",
  email: "tim.kirkpatrick@kuehne-nagel.com",
  jwtToken: "abracadabra",
  countryCode3: "FRA",
  authRole: Role.Trainer,
  role: "Trainer",
};

const sponsorUser: Principal = {
  fullName: "Jozef Peterson",
  username: "jozefpeterson",
  email: "jozef.peterson@kuehne-nagel.com",
  jwtToken: "abracadabra",
  countryCode3: "USA",
  authRole: Role.Sponsor,
  role: "Sponsor",
};

const anonymousUser: Partial<Principal> = {
  authRole: Role.Anonymous,
  role: "Anonymous",
};

export const loggedInUsers = {
  regionalManagerUser,
  countryManagerUser,
  advocateUser,
  trainerUser,
  sponsorUser,
  anonymousUser,
};

export const arrayOfLoggedInUsers = Object.values(loggedInUsers);
