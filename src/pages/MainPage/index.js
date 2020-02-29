import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from '../../components/DataTable';

export const MainPage = (props) => {

  const initialState = {
    data: [],
    loading: false,
  };
  
  const [state, setState] = useState(initialState);
  
  const url = process.env.REACT_APP_FETCH_URL_SMALL;
  
  const fetchData = async () => {
    const response = await fetch(url);
    setState(oldState => ({...oldState, loading: true}));
  
    if (response.ok) {
      const json = await response.json();
      setTimeout(() => {
        setState(oldState => ({...oldState, data: json, loading: false}));
      }, 2000 )
      // setState(oldState => ({...oldState, data: json, loading: false}));
    } else {
      throw new Error(
        `Error while data fetching. Server response:${response.status}`
        );
    };
  };

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div>
        <ul>
          <li><Link to='/page/1'>1</Link></li>
          <li><Link to='/page/2'>2</Link></li>
          <li><Link to='/page/3'>3</Link></li>
        </ul>
      </div>
      <DataTable currentPage={props.match.params.page} state={state}/>
      <div>
        {
          props.match.params.page ? props.match.params.page : 'none'
        }
      </div>
    </>
  )
};
