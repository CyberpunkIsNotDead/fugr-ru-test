import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import getCurrentPage from './getCurrentPage';
import getPagesCount from './getPagesCount';
import { DataContext } from '../../DataContextWrapper';

export const Pagination = (props) => {

  const { dataState: {data} } = useContext(DataContext);

  const currentPage = props.currentPage;
  const pagesCount = getPagesCount(data);

  const createPagination = () => {
    let pages = [];

    for (let num = 1; num <= pagesCount; num++) {
      if (num !== currentPage) {
        pages.push(
          <span key={num}>
            <Link to={`/page/${num}`}>{num}</Link>
          </span>
        );
      } else {
        pages.push(
          <span className='active' key={num}>
            <Link to={`/page/${num}`}>{num}</Link>
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
