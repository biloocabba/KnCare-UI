import {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  SEARCH_EMPLOYEES,
  DELETE_EMPLOYEE,
  CREATE_CARE_MEMBER,
} from "actions/types";

const employeesReducer = (employees = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_EMPLOYEE:
      console.log(payload);
      return [...employees, payload];

    case CREATE_CARE_MEMBER:
      return [...employees, payload];

    case SEARCH_EMPLOYEES:
      return payload;

    case UPDATE_EMPLOYEE:
      return employees.map(user => {
        if (user.id === payload.id) {
          return {
            ...user,
            ...payload,
          };
        } else {
          return user;
        }
      });

    case DELETE_EMPLOYEE:
      return employees.filter(({ id }) => id !== payload.id);

    default:
      return employees;
  }
};

export default employeesReducer;
