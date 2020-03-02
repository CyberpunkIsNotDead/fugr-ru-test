import React, { useContext } from 'react';
import { DataContext } from '../../DataContextWrapper';
import { SORT_ENTRIES } from '../../DataContextWrapper/actionTypes';

export const DataTable = () => {
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

  // data fields in context

  const DATA_FIELDS = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phone',
  ];

  const tableHead = () => (
    DATA_FIELDS.map((field, index) => (
      <th key={index}>
        <span>{field}</span>
        <button onClick={() => {sortData(field)}}>sort</button>
      </th>
    ))
  );

  const tableRows = () => (
    dataState.data.map((e, index) => (
        <tr key={index}>
          {
            DATA_FIELDS.map((field, index) => (
              <td key={index}>{e[field]}</td>
            ))
          }
        </tr>
      )
    )
  );

  return (
    <table>
      <thead>
        <tr>
          { tableHead() }
        </tr>
      </thead>
      <tbody>
        { tableRows() }
      </tbody>
    </table>
  );
};
