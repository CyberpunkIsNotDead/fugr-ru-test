import React, { useEffect } from 'react';
import { useState } from 'react';


export const DataTable = (props) => {
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
  }, [props])

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {
          !state.loading ? state.data.map((e, index) => (
              <tr key={index}>
                <td>{e.id}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
              </tr>
            )) : <tr><td>loading...</td></tr>
        }
      </tbody>
    </table>
  );
};
