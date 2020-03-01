import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from '../../components/DataTable';
import { DataContext } from '../../DataContextWrapper';
import { START_FETCHING, FETCH_ENTRIES } from '../../DataContextWrapper/actionTypes';

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

  useEffect(() => {
    fetchData();
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
