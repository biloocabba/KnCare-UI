import { categoriesData } from "../../json-server-mock-data/categories";
import { LOAD_CATEGORIES } from "../actions/types/index";

const categoryReducer = (categories = categoriesData, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_CATEGORIES:
      return [payload];

    default:
      return categories;
  }
};

export default categoryReducer;
