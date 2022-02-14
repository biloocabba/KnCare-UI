import { BestPractice } from "types";
import { CREATE_ENTITY_ID } from "variables/app.consts";

export const NEW_BEST_PRACTICE = "/best-practices/new-best-practice";
export const SEARCH_BEST_PRACTICE = "/best-practices/search-best-practices";
export const BEST_PRACTICE_DETAILS = "/best-practices/best-practice-details";

export const bestPracticeDefaultState: BestPractice = {
  id: CREATE_ENTITY_ID,
  title: "",
  description: "",
  author: "",
  publishDate: new Date(),
  rating: 0,
  tags: [],
  imageUrl: "",
  contentUrl: "",
};
