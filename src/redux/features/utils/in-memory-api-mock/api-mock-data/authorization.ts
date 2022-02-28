import { Principal, Role } from "types";

const regionalManagerUser: Principal = {
  fullName: "Gabriela Rios",
  username: "gabriela.rios",
  email: "gabriela.rios@kuehne-nagel.com",
  jwtToken: "asdlasdloldfiadjadsfhueiy2839r7489fsdhfaiuehf328",
  countryCode3: "BRA",
  authRole: Role.RegionalManager,
  role: "RegionalTransformationManager",
  imageUrl: "https://i.pravatar.cc/300",
};

const countryManagerUser: Principal = {
  fullName: "Kristin Allik",
  username: "kristin.allik",
  email: "kristin.allik@kuehne-nagel.com",
  jwtToken: "rfwpio425ipogfskpflk3p32q09orpfafdefkaöldfkaodffe",
  countryCode3: "DEU",
  authRole: Role.CountryManager,
  role: "CountryTransformationManager",
  imageUrl: "https://i.pravatar.cc/300",
};

const advocateUser: Principal = {
  fullName: "Laura Haavik",
  username: "laura.haavik",
  email: "laura.haavik@kuehne-nagel.com",
  jwtToken: "45jo54juo3iurfeoiru2o3u42o3ijdklmnlkjr2o3irujoi23u4o2ij42oi",
  countryCode3: "EST",
  authRole: Role.Advocate,
  role: "Advocate",
  imageUrl: "https://i.pravatar.cc/300",
};

const trainerUser: Principal = {
  fullName: "Stefano Fiorenza",
  username: "stefano.fiorenza",
  email: "stefano.fiorenza@kuehne-nagel.com",
  jwtToken: "dasdasdtyaudtyquwghjasfy3242t3jgr4vr23vtv32yt32v2gsya65s6",
  countryCode3: "IND",
  authRole: Role.Trainer,
  role: "Trainer",
  imageUrl: "https://i.pravatar.cc/300",
};

const sponsorUser: Principal = {
  fullName: "Tomi Markus Alber",
  username: "tomimarkus.alber",
  email: "tomimarkus.alber@kuehne-nagel.com",
  jwtToken: "sgdaugu32yg2gy3jrgt3fcht43hv4hgvyghgafuadsrtf675r76afs6a78",
  countryCode3: "PRT",
  authRole: Role.Sponsor,
  role: "Sponsor",
  imageUrl: "https://i.pravatar.cc/300",
};

const anonymousUser: Principal = {
  authRole: Role.Anonymous,
  role: "Anonymous",
  fullName: "Anonymous",
  username: "Anonymous",
  email: "Anonymous",
  jwtToken: "Anonymous",
  countryCode3: "",
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
