import React, { Fragment, useContext } from 'react';
import { DataTable } from '../../components/DataTable';
import { DataContext } from '../../DataContextWrapper';
import { START_FETCHING, FETCH_ENTRIES } from '../../DataContextWrapper/actionTypes';
import { Pagination } from '../../components/Pagination';
import { limitData } from '../../DataContextWrapper/dataManager';

export const MainPage = (props) => {
  const {
    dataState,
    dispatch,
    CONFIG: {PAGE_ENTRIES_LIMIT}
  } = useContext(DataContext);
  
  // const url = process.env.REACT_APP_FETCH_URL_SMALL;
  const url_big = process.env.REACT_APP_FETCH_URL_BIG;
  const url_small = process.env.REACT_APP_FETCH_URL_SMALL;

  const fetchData = async (url) => {
    const response = await fetch(url);
    dispatch({type: START_FETCHING});
  
    if (response.ok) {
      const json = await response.json();
      setTimeout(() => {
        dispatch({type: FETCH_ENTRIES, payload: json});
      }, 2000 );
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
    ? <div>loading...</div>
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
