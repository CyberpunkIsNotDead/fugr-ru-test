import React, { useContext, Fragment, useState } from 'react';
import { DataContext } from '../../Context/DataContextWrapper';
import { SORT_ENTRIES } from '../../Context/DataContextWrapper/actionTypes';

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

  const [info, setInfo] = useState(null);

  const showInfo = (item) => {
    setInfo(item);
  };

  const renderIfPresent = () => (
    info
    ? (
      <div>
        <p>Выбран пользователь <b>{`${info.firstName} ${info.lastName}`}</b></p>
        <p>Описание:</p>
        <textarea value={info.description} readOnly/>
        <p>Адрес проживания: <b>{info.address.streetAddress}</b></p>
        <p>Город: <b>{info.address.city}</b></p>
        <p>Провинция/штат: <b>{info.address.state}</b></p>
        <p>Индекс: <b>{info.address.zip}</b></p>
      </div>
    ) : null
  );

  const tableRows = () => (
    props.data.map((item, index) => (
        <tr key={index} onClick={() => {showInfo(item)}}>
          {
            DATA_FIELDS.map((field, index) => (
              <td key={index}>{item[field]}</td>
            ))
          }
        </tr>
      )
    )
  );

  return (
    <Fragment>
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
    { renderIfPresent() }
    </Fragment>
  );
};
