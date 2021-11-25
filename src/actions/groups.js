import groupService from "services/GroupServices";
import {
  ADD_CAREMEMBER_TO_GROUP,
  CREATE_GROUP,
  DEACTIVATE_GROUP,
  REMOVE_CAREMEMBER_FROM_GROUP,
  RETRIEVE_GROUPS,
} from "./types";

export const createGroup = (name, description) => async dispatch => {
  try {
    const res = await groupService.create({ name, description });
    dispatch({
      type: CREATE_GROUP,
      payload: res.data,
    });
    //console.log(res.data)
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const retrieveGroups = () => async dispatch => {
  try {
    const res = await groupService.getAll();
    console.log(res.data);
    dispatch({
      type: RETRIEVE_GROUPS,
      payload: res.data.groups,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addGroupMember = (id, data) => async dispatch => {
  try {
    const res = await groupService.update(id, data);
    dispatch({
      type: ADD_CAREMEMBER_TO_GROUP,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deactivateGroup = id => async dispatch => {
  try {
    await groupService.update(id);
    dispatch({
      type: DEACTIVATE_GROUP,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeGroupMember = (id, data) => async dispatch => {
  try {
    await groupService.update(id, data);

    dispatch({
      type: REMOVE_CAREMEMBER_FROM_GROUP,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

// export const deleteAllGroups = () => async (dispatch) => {
//   try {
//     const res = await GroupDataService.removeAll();

//     dispatch({
//       type: DELETE_ALL_GROUPS,
//       payload: res.data,
//     });

//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// export const findUserByUserName = (userName) => async (dispatch) => {
//   try {
//     const res = await UserDataService.findUserByUserName(userName);
//     dispatch({
//       type: RETRIEVE_USERS,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
