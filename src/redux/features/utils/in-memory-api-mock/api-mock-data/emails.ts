import { Email } from "types";

export const emails: Email[] = [
  {
    id: 1,
    subject: "Lorem ipsum dolor sit amet 1",
    content: "hello world",
    groups: [1, 2],
    businessUnits: [1, 2],
    roles: [2, 3],
    countries: ["AFG", "BRA"],
    recipients: [10, 12],
    sendingDate: "13/02/2022",
  },
  {
    id: 2,
    subject: "Lorem ipsum dolor sit amet 2",
    content: "hello world",
    groups: [3, 4],
    businessUnits: [5, 6],
    roles: [1, 3],
    countries: ["AFG", "BRA"],
    recipients: [4, 5, 6, 7, 8, 9],
    sendingDate: "13/03/2022",
  },
];
