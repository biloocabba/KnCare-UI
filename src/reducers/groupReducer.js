import { categoriesData } from "mock-data/categories";

import {
  CREATE_GROUP,
  RETRIEVE_GROUPS,
  DEACTIVATE_GROUP,
  ADD_CAREMEMBER_TO_GROUP,
  REMOVE_CAREMEMBER_FROM_GROUP,
  SEARCH_GROUP,
  UPDATE_GROUP,
} from "../actions/types";

function groupReducer(groups = categoriesData.groups, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_GROUP:
      return [...groups, payload];

    case RETRIEVE_GROUPS:
      return payload;

    case DEACTIVATE_GROUP:
      return groups.map(group => {
        if (group.id === payload.id) {
          return {
            ...group,
            active: !group.active,
          };
        } else {
          return group;
        }
      });

    case UPDATE_GROUP:
      return groups.map(group => {
        if (group.id === payload.id) {
          return {
            ...group,
            ...payload,
          };
        } else {
          return group;
        }
      });

    // case ADD_CAREMEMBER_TO_GROUP:
    // return groups.map((group) => {
    //   if(group.id === payload.id){
    //     return {
    //       ...group,
    //       members: {...payload.members}
    //     }
    //   } else {
    //     return group;
    //   }});

    // case REMOVE_CAREMEMBER_FROM_GROUP: {
    //   return groups.map((group) => {
    //   if(group.id === payload.id){
    //     return {
    //       ...group,
    //       members: group.members.filter(( {id}) => !payload.members.includes(id) )
    //     }
    //   } else {
    //     return group;
    //   }
    // })}

    default:
      return groups;
  }
}

//add reducer to add members

export default groupReducer;
