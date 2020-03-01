import React, { useContext } from 'react';
import { DataContext } from '../../DataContextWrapper';
import { SORT_ENTRIES } from '../../DataContextWrapper/actionTypes';

export const DataTable = (props) => {
  const {
    dataState,
    dispatch,
    sortByField,
  } = useContext(DataContext);

  return (
    <table>
      <thead>
        <tr>
          <th>
            <span>id</span>
            <button onClick={() => {
              dispatch({
                type: SORT_ENTRIES,
                payload: sortByField(dataState.data, 'id')
              })
            }}>sort</button>
          </th>
          <th>
            <span>firstName</span>
            <button onClick={() => {
              dispatch({
                type: SORT_ENTRIES,
                payload: sortByField(dataState.data, 'firstName')
              })
            }}>sort</button>
          </th>
          <th>
            <span>lastName</span>
            <button onClick={() => {
              dispatch({
                type: SORT_ENTRIES,
                payload: sortByField(dataState.data, 'lastName')
              })
            }}>sort</button>
          </th>
          <th>email
            <span>email</span>
            <button onClick={() => {
              dispatch({
                type: SORT_ENTRIES,
                payload: sortByField(dataState.data, 'email')
              })
            }}>sort</button>
          </th>
          <th>
            <span>phone</span>
            <button onClick={() => {
              dispatch({
                type: SORT_ENTRIES,
                payload: sortByField(dataState.data, 'phone')
              })
            }}>sort</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((e, index) => (
            <tr key={index}>
              <td>{e.id}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
