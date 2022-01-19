import {
  CREATE_BEST_PRACTICE,
  RETRIEVE_BEST_PRACTICES,
  UPDATE_BEST_PRACTICE,
  DELETE_BEST_PRACTICE,
} from "../actions/types/index";

const bestPracticeReducer = (bestPractices = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BEST_PRACTICE:
      return [...bestPractices, payload];
    case RETRIEVE_BEST_PRACTICES:
      return payload;
    case UPDATE_BEST_PRACTICE:
      return bestPractices.map(bestPractice => {
        if (bestPractice.id === payload.id) {
          return {
            ...bestPractice,
            ...payload,
          };
        } else {
          return bestPractice;
        }
      });
    case DELETE_BEST_PRACTICE:
      return bestPractices.filter(({ id }) => id !== payload.id);
    default:
      return bestPractices;
  }
};

export default bestPracticeReducer;
