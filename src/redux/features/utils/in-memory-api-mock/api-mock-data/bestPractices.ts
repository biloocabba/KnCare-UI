import { BestPractice } from "types";

import { sampleBase64pdf } from "./mock-data-pdf-base64";

export const bestPractices: BestPractice[] = [
  {
    id: 1,
    title: "Use the right type for your variables",
    description:
      "Use the right type for your variables. This is a good practice to avoid errors in your code.",
    author: "John Doe",
    publishDate: new Date("2019-01-01"),
    rating: 2,
    tags: ["typescript", "javascript", "react"],
    contentUrl:
      "https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-types",
  },
  {
    id: 2,
    title: "Be consistent with your naming conventions",
    description: "This is a good practice to avoid errors in your code.",
    author: "Peter Parker",
    publishDate: new Date("2019-01-01"),
    rating: 1,
    tags: ["typescript", "react", "go"],
    contentUrl: sampleBase64pdf,
  },
  {
    id: 3,
    title: "Be consistent with your naming conventions",
    description: "This is a good practice to avoid errors in your code.",
    author: "Mary Jane",
    publishDate: new Date("2019-01-01"),
    rating: 5,
    tags: ["javascript", "react", "html"],
    contentUrl:
      "https://github.com/KNITS-OS/SkillQuest/raw/master/Resources/corporatebrochurekuehnenagel2021en.pdf",
  },
];
