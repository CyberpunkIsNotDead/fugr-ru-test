import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { limitData, sortByField } from './dataManager';
import CONFIG from '../config';


const initialDataState = {
  data: null,
  requestSent: false,
  loading: false,
  ascendingOrder: false,
};

export const DataContext = createContext(initialDataState);

export const DataContextWrapper = ({children}) => {
  const [dataState, dispatch] = useReducer(reducer, initialDataState);

  return (
    <DataContext.Provider
      value={{
        dataState,
        dispatch,
        limitData,
        sortByField,
        CONFIG,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
