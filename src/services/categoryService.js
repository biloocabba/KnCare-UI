import http from './http-common'
import { categories } from '../redux/features/utils/in-memory-api-mock/mock-data/categories.js.js'

const loadCategories = () => {
  return categories;
}

const categoryService = {
  loadCategories
};

export default categoryService
