import { categories } from "redux/features";

const loadCategories = () => {
  return categories;
};

const categoryService = {
  loadCategories,
};

export default categoryService;
