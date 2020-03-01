import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
// import { limitData, sortDataById, sortByField } from '../pages/MainPage/dataManager';

const initialDataState = {
  data: null,
  loading: false,
};

export const Context = createContext(initialDataState);

export const DataStateContext = ({children}) => {
  const [dataState, dispatch] = useReducer(reducer, initialDataState);

  return (
    <Context.Provider
      value={[dataState, dispatch]}
    >
      {children}
    </Context.Provider>
  );
};
