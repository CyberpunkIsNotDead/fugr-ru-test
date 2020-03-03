import {
  START_FETCHING,
  FETCH_ENTRIES,
  SORT_ENTRIES,
} from './actionTypes'
import { sortByField } from './dataManager'

export const reducer = (dataState, action) => {
  switch(action.type) {
    case START_FETCHING:
      return {...dataState, requestSent: false, loading: true};
    case FETCH_ENTRIES:
      return {...dataState, data: action.payload, loading: false};
    case SORT_ENTRIES:
      return (
        {
          ...dataState,
          data: sortByField(dataState.data, action.field, action.isAscending),
        }
      );
    default:
      return dataState;
  };
};
