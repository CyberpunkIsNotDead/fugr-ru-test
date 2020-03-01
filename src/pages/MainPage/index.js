import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from '../../components/DataTable';
import { sortDataById } from './dataManager';
import { Context } from '../../DataStateContext';
import { START_FETCHING, FETCH_ENTRIES, SORT_ENTRIES } from '../../DataStateContext/actionTypes';

export const MainPage = (props) => {
  const [dataState, dispatch] = useContext(Context);
  
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

  const sortById = () => {
      const sortedData = sortDataById(dataState.data);
      console.log(sortedData, '1');
      dispatch({type: SORT_ENTRIES, payload: sortedData});
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const checkIfDataExists = () => (
    dataState.data !== null
    ? (
      <Fragment>
        <button onClick={() => {sortById()}}>sortById</button>
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
