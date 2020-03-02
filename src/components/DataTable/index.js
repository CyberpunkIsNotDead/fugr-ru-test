import React, { useContext } from 'react';
import { DataContext } from '../../DataContextWrapper';
import { SORT_ENTRIES } from '../../DataContextWrapper/actionTypes';
import CONFIG from '../../config';

export const DataTable = () => {
  const {
    dataState,
    dispatch,
  } = useContext(DataContext);

  const sortData = (field) => {
    dispatch({
      type: SORT_ENTRIES,
      field: field,
    });
  };

  const DATA_FIELDS = CONFIG.DATA_FIELDS;

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
