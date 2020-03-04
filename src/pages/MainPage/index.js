import React, { Fragment, useContext } from 'react';
import { DataContext } from '../../Context/DataContextWrapper';
import { START_FETCHING, FETCH_ENTRIES } from '../../Context/DataContextWrapper/actionTypes';
import { DataFilter } from '../../components/DataFilter';

export const MainPage = (props) => {
  const {
    dataState,
    dispatch,
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
        <DataFilter currentPage={currentPage} />
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
