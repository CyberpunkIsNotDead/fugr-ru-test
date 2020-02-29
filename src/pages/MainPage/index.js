import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from '../../components/DataTable';
import { sortData } from './dataManager';

export const MainPage = (props) => {

  const initialdataState = {
    data: [],
    loading: false,
  };
  
  const [dataState, setDataState] = useState(initialdataState);
  
  const url = process.env.REACT_APP_FETCH_URL_SMALL;
  
  const fetchData = async () => {
    const response = await fetch(url);
    setDataState(oldDataState => ({...oldDataState, loading: true}));
  
    if (response.ok) {
      const json = await response.json();
      setTimeout(() => {
        setDataState(oldDataState => ({...oldDataState, data: json, loading: false}));
      }, 2000 )
      // setDataState(oldDataState => ({...oldDataState, data: json, loading: false}));
    } else {
      throw new Error(
        `Error while data fetching. Server response:${response.status}`
        );
    };
  };

  const sortById = () => {
    setDataState(oldDataState => {
      const sortedData = sortData(oldDataState.data);
      return {...oldDataState, data: sortedData};
    })
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   console.log('sorted', dataState.data)
  // }, [dataState.data])

  return (
    <>
      <div>
        <ul>
          <li><Link to='/page/1'>1</Link></li>
          <li><Link to='/page/2'>2</Link></li>
          <li><Link to='/page/3'>3</Link></li>
        </ul>
      </div>
      <button onClick={() => {sortById()}}>sortById</button>
      <DataTable currentPage={props.match.params.page} data={dataState.data} loading={dataState.loading}/>
      <div>
        {
          props.match.params.page ? props.match.params.page : 'none'
        }
      </div>
    </>
  )
};
