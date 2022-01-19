import {
  ALL_ACTIVE_MEMBERS,
  NEW_MEMBERS,
  SELF_RESIGNED_MEMBERS,
  AUTO_OFFBOARDED_MEMBERS,
} from "actions/types";

import mapKpiService from "../services/mapKpiService";

export const getActiveMembersMapData = () => async dispatch => {
  try {
    const res = await mapKpiService.getActiveMembersMapData();
    dispatch({
      type: ALL_ACTIVE_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getNewMembersMapData = () => async dispatch => {
  try {
    const res = await mapKpiService.getNewMembersMapData();
    dispatch({
      type: NEW_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSelfResignedMembersMapData = () => async dispatch => {
  try {
    const res = await mapKpiService.getSelfResignedMembersMapData();
    dispatch({
      type: SELF_RESIGNED_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAutoOffboardedMembersMapData = () => async dispatch => {
  try {
    const res = await mapKpiService.getAutoOffboardedMembersMapData();
    dispatch({
      type: AUTO_OFFBOARDED_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
