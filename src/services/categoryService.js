import { categories } from "../redux/features/utils/in-memory-api-mock/mock-data/categories.js.js";

import http from "./http-common";

const loadCategories = () => {
  return categories;
};

const categoryService = {
  loadCategories,
};

export default categoryService;
