import React, { Fragment, useContext } from 'react';
import { DataTable } from '../../components/DataTable';
import { DataContext } from '../../DataContextWrapper';
import { START_FETCHING, FETCH_ENTRIES } from '../../DataContextWrapper/actionTypes';
import { Pagination } from '../../components/Pagination';
import { limitData } from '../../DataContextWrapper/dataManager';
import { SearchField } from '../../components/SearchField';

export const MainPage = (props) => {
  const {
    dataState,
    dispatch,
    CONFIG: {PAGE_ENTRIES_LIMIT}
  } = useContext(DataContext);
  
  const url_big = process.env.REACT_APP_FETCH_URL_BIG;
  const url_small = process.env.REACT_APP_FETCH_URL_SMALL;

  const fetchData = async (url) => {
    dispatch({type: START_FETCHING});
    const response = await fetch(url);
  
    if (response.ok) {
      const json = await response.json();
      dispatch({type: FETCH_ENTRIES, payload: json});
    } else {
      throw new Error(
        `Error while data fetching. Server response:${response.status}`
        );
    };
  };

  const currentPage = props.match.params.page ? props.match.params.page : 1

  const checkIfDataExists = () => (
    dataState.data !== null
    ? (
      <Fragment>
        <SearchField />
        <Pagination
          currentPage={currentPage}
        />
        <DataTable
          currentPage={props.match.params.page}
          data={
            limitData(
              dataState.data,
              currentPage,
              PAGE_ENTRIES_LIMIT
              )
            }
        />
      </Fragment>
    ) : null
  );

  const checkIfLoading = () => (
    dataState.loading
    ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    : checkIfDataExists()
  );

  return (
    <>
      <div>
        <button onClick={() => fetchData(url_small)}>Small dataset</button>
        <button onClick={() => fetchData(url_big)}>Big dataset</button>
      </div>
      {
        checkIfLoading()
      }
    </>
  )
};
