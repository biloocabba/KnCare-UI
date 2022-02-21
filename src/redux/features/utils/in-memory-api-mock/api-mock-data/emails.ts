import { Email } from "types";

export const emails: Email[] = [
  {
    id: 1,
    subject: "Lorem ipsum dolor sit amet",
    content: "hello world",
    groups: [1, 2],
    businessUnits: [1, 2],
    roles: [2, 3],
    countries: ["AFG", "BRA"],
    recipients: [10, 12],
    sendingDate: new Date("2022-02-01"),
  },
  {
    id: 2,
    subject: "Lorem ipsum dolor sit amet",
    content: "hello world",
    groups: [3, 4],
    businessUnits: [5, 6],
    roles: [1, 3],
    countries: ["AFG", "BRA"],
    recipients: [4, 5, 6, 7, 8, 9],
    sendingDate: new Date("2022-03-01"),
  },
];
