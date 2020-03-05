import React, { useContext } from 'react';
import getPagesCount from './getPagesCount';
import { DataContext } from '../../Context/DataContextWrapper';

export const Pagination = (props) => {
  const {
    CONFIG: {PAGE_ENTRIES_LIMIT}
  } = useContext(DataContext);

  const currentPage = props.currentPage;
  const pagesCount = getPagesCount(props.data, PAGE_ENTRIES_LIMIT);

  const createPagination = () => {
    let pages = [];

    for (let num = 1; num <= pagesCount; num++) {
      if (num !== currentPage) {
        pages.push(
          <span key={num} onClick={() => {props.setCurrentPage(num)}}>
            {num}
          </span>
        );
      } else {
        pages.push(
          <span className='active' key={num} onClick={() => {props.setCurrentPage(num)}}>
            {num}
          </span>
        );
      };
    };

    return pages
  };

  return (
    <div className='pagination'>
      {
        createPagination()
      }
    </div>
  );
};
