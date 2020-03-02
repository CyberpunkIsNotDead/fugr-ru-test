import React, { useEffect, Fragment, useContext } from 'react';
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
  const url = process.env.REACT_APP_FETCH_URL_BIG;

  const fetchData = async () => {
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

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const currentPage = props.match.params.page ? props.match.params.page : 1

  const checkIfDataExists = () => (
    dataState.data !== null
    ? (
      <Fragment>
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
      <Pagination
        currentPage={currentPage}
        />
      </div>
      {
        checkIfLoading()
      }
    </>
  )
};
