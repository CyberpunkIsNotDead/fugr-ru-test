import React, { useState, useContext, Fragment, useEffect } from 'react';
import { DataContext } from '../../Context/DataContextWrapper';
import { SearchForm } from '../SearchForm';
import { DataTable } from '../DataTable';
import { Pagination } from '../Pagination';
import { AddForm } from '../AddForm';

export const DataFilter = () => {
  const [filterString, setFilterString] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const {
    dataState: {data},
    filterData,
    limitData,
    CONFIG: {PAGE_ENTRIES_LIMIT},
  } = useContext(DataContext);

  const filtered = filterData(data, filterString);
  const tableData = limitData(filtered, currentPage, PAGE_ENTRIES_LIMIT);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterString]);

  return (
    <Fragment>
      <SearchForm setFilterString={setFilterString} />
      <Pagination
        currentPage={currentPage}
        data={filtered}
        setCurrentPage={setCurrentPage}
      />
      {/* <AddForm /> */}
      <DataTable
        currentPage={currentPage}
        data={tableData}
      />
    </Fragment>
  )
};
