import React, { useContext } from 'react';
import { DataContext } from '../../DataContextWrapper';
import { SORT_ENTRIES } from '../../DataContextWrapper/actionTypes';

export const DataTable = (props) => {
  const {
    dataState,
    dispatch,
    sortByField,
  } = useContext(DataContext);

  const sortData = (field) => {
    dispatch({
      type: SORT_ENTRIES,
      payload: sortByField(dataState.data, field)
    });
  };

  // implement function that creates table elements by fields array
  // this.parentNode.children[0].textContent - use refs, probably

  return (
    <table>
      <thead>
        <tr>
          <th>
            <span>id</span>
            <button onClick={() => {sortData('id')}}>sort</button>
          </th>
          <th>
            <span>firstName</span>
            <button onClick={() => {sortData('firstName')}}>sort</button>
          </th>
          <th>
            <span>lastName</span>
            <button onClick={() => {sortData('lastName')}}>sort</button>
          </th>
          <th>
            <span>email</span>
            <button onClick={() => {sortData('email')}}>sort</button>
          </th>
          <th>
            <span>phone</span>
            <button onClick={() => {sortData('phone')}}>sort</button>
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
