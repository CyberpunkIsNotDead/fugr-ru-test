import {
  START_FETCHING,
  FETCH_ENTRIES,
  SORT_ENTRIES,
  ASCENDING_ORDER,
  DESCENDING_ORDER
} from './actionTypes'
import { sortByField } from './dataManager'

export const reducer = (dataState, action) => {
  switch(action.type) {
    case START_FETCHING:
      return {...dataState, loading: true};
    case FETCH_ENTRIES:
      return {...dataState, data: action.payload, loading: false};
    case SORT_ENTRIES:
      return ( // TO FIX: order changes for all fields
        dataState.ascendingOrder
        ? {
          ...dataState,
          data: sortByField(dataState.data, action.field, DESCENDING_ORDER),
          ascendingOrder: !dataState.ascendingOrder
        } : {
          ...dataState,
          data: sortByField(dataState.data, action.field, ASCENDING_ORDER),
          ascendingOrder: !dataState.ascendingOrder
        }
      );
    default:
      return dataState;
  };
};
