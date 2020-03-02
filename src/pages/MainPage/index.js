import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from '../../components/DataTable';
import { DataContext } from '../../DataContextWrapper';
import { START_FETCHING, FETCH_ENTRIES } from '../../DataContextWrapper/actionTypes';
import { Pagination } from '../../components/Pagination';

export const MainPage = (props) => {
  const {
    dataState,
    dispatch,
  } = useContext(DataContext);
  
  const url = process.env.REACT_APP_FETCH_URL_SMALL;

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

  // const fakeFetchData = async (data) => {
  //   setTimeout(dispatch({type: START_FETCHING}), 100);
  //   setTimeout(dispatch({type: FETCH_ENTRIES, payload: data}), 2000);
  // };

  useEffect(() => {
    fetchData();
    // fakeFetchData(data);
    // eslint-disable-next-line
  }, []);

  const checkIfDataExists = () => (
    dataState.data !== null
    ? (
      <Fragment>
        <DataTable
          currentPage={props.match.params.page}
          data={dataState.data}
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
        <ul>
          <li><Link to='/page/1'>1</Link></li>
          <li><Link to='/page/2'>2</Link></li>
          <li><Link to='/page/3'>3</Link></li>
        </ul>
      <Pagination
        currentPage={props.match.params.page ? props.match.params.page : 1}
        pagesCount={9} />
      </div>
      {
        checkIfLoading()
      }
      <div>
        {
          props.match.params.page ? props.match.params.page : 'none'
        }
      </div>
    </>
  )
};
