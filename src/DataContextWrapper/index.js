import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { limitData, sortByField } from '../pages/MainPage/dataManager';

const initialDataState = {
  data: null,
  loading: false,
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
