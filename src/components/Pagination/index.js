import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = (currentPage, pagesCount) => {
  
  const createPagination = () => {
    let pages = [];

    for (let num = 1; num <= pagesCount; num++) {
      if (num !== currentPage) {
        pages.push(
          <span>
            <Link to={`/page/${num}`}/>
          </span>
        );
      } else {
        pages.push(
          <span className='active'>
            <Link to={`/page/${num}`}/>
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
