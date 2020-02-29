import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = (props) => {
  
  console.log(props.currentPage, props.pagesCount)

  const createPagination = () => {
    let pages = [];

    for (let num = 1; num <= props.pagesCount; num++) {
      if (num !== props.currentPage) {
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
