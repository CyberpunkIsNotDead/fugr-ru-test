import React, { useState, useContext, Fragment } from 'react';
import { DataContext } from '../../Context/DataContextWrapper';
import { SearchForm } from '../SearchForm';
import { DataTable } from '../DataTable';
import { Pagination } from '../Pagination';
import { AddForm } from '../AddForm';

export const DataFilter = (props) => {
  const [filterString, setFilterString] = useState('');

  const {
    dataState: {data},
    filterData,
    limitData,
    CONFIG: {PAGE_ENTRIES_LIMIT},
  } = useContext(DataContext);

  const filtered = filterData(data, filterString);

  const tableData = limitData(filtered, props.currentPage, PAGE_ENTRIES_LIMIT)

  return (
    <Fragment>
      <SearchForm setFilterString={setFilterString} />
      <Pagination
        currentPage={props.currentPage}
        data={filtered}
      />
      <AddForm />
      <DataTable
        currentPage={props.currentPage}
        data={tableData}
      />
    </Fragment>
  )
};
