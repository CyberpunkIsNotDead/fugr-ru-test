import React, { useContext } from 'react';
import { DataContext } from '../../DataContextWrapper';
import { SORT_ENTRIES } from '../../DataContextWrapper/actionTypes';

export const DataTable = (props) => {

  const {
    dataState,
    dispatch,
    CONFIG: {DATA_FIELDS}
  } = useContext(DataContext);

  const sortData = (field) => {
    dispatch({
      type: SORT_ENTRIES,
      field: field,
    });
  };

  const tableHead = () => (
    DATA_FIELDS.map((field, index) => (
      <th key={index} onClick={() => {sortData(field)}}>
        <span>{field}</span>
        <span>{
          dataState.ascendingOrder
          ? '▲'
          : '▼'
        }</span>
      </th>
    ))
  );

  const tableRows = () => (
    props.data.map((e, index) => (
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
