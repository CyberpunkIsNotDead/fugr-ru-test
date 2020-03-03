import React, { useContext } from 'react';
import { DataContext } from '../../DataContextWrapper';
import { SORT_ENTRIES } from '../../DataContextWrapper/actionTypes';

export const DataTable = (props) => {

  const {
    dispatch,
    CONFIG: {DATA_FIELDS},
    fields
  } = useContext(DataContext);

  const sortData = (field, index) => {
    dispatch({
      type: SORT_ENTRIES,
      field: field.value,
      isAscending: field.isAscending
    });
    fields[index] = {...field, isAscending: !field.isAscending}
  };

  const tableHead = () => (
    fields.map((field, index) => (
      <th key={index} onClick={() => {sortData(field, index)}}>
        <span>{field.value}</span>
        <span>{
          field.isAscending
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
