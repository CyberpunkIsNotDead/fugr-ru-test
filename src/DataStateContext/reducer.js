import { START_FETCHING, FETCH_ENTRIES, SORT_ENTRIES } from './actionTypes'

export const reducer = (dataState, action) => {
  switch(action.type) {
    case START_FETCHING:
      return {...dataState, loading: true};
    case FETCH_ENTRIES:
      return {...dataState, data: action.payload, loading: false};
    case SORT_ENTRIES:
      return {...dataState, data: action.payload}
    default:
      return dataState;
  };
};
