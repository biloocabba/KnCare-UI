import roleService from "../services/roleService";

import { CREATE_ROLE, DEACTIVATE_ROLE, EDIT_ROLE, RETRIEVE_ROLES } from "./types";

export const createRole = data => async dispatch => {
  try {
    const res = await roleService.create(data);
    dispatch({
      type: CREATE_ROLE,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const updateRole = (id, data) => {
  return { type: EDIT_ROLE, payload: id, data };
};

export const deleteRole = id => {
  return { type: DEACTIVATE_ROLE, payload: { id } };
};

export const retrieveRoles = () => async dispatch => {
  try {
    const res = await roleService.getAll();
    dispatch({ type: RETRIEVE_ROLES, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
