// import React, { useState, useEffect, Fragment } from 'react';
// import { DataTable } from '../../components/DataTable';
// import { Pagination } from '../../components/Pagination';
// import { sortData, limitData } from './dataManager';

// export const MainPage = (props) => {

//   const initialdataState = {
//     data: null,
//     loading: false,
//   };
  
//   const [dataState, setDataState] = useState(initialdataState);

//   const initialPagesState = {
//     currentPage: props.match.params.page ? props.match.params.page : 1,
//     pagesCount: 1,
//   };
//   const [pages, setPages] = useState(initialPagesState);

//   const [dataChunk, setDataChunk] = useState(null)
  
//   const url = process.env.REACT_APP_FETCH_URL_SMALL;
  
//   const fetchData = async () => {
//     const response = await fetch(url);
//     setDataState(oldDataState => ({...oldDataState, loading: true}));
  
//     if (response.ok) {
//       const json = await response.json();
//       setTimeout(() => {
//         setDataState(oldDataState => ({...oldDataState, data: json, loading: false}));
//       }, 2000 )
//       // setDataState(oldDataState => ({...oldDataState, data: json, loading: false}));
//     } else {
//       throw new Error(
//         `Error while data fetching. Server response:${response.status}`
//         );
//     };
//   };

//   const sortById = () => {
//     setDataState(oldDataState => {
//       const sortedData = sortData(oldDataState.data);
//       return {...oldDataState, data: sortedData};
//     })
//   };

//   const isDataExist = dataState.data !== null ? true : false

//   useEffect(() => {
//     fetchData();
//     // eslint-disable-next-line
//   }, []);

//   // let limitedData = null

//   const pagesCount = isDataExist ? Math.floor(dataState.data.length / 4) : 1;

//   useEffect(() => {


//     setPages(oldPagesState => {
//       // limitedData = limitData(dataState.data, pages.currentPage, pagesCount)
//       return {
//         ...oldPagesState, pagesCount: pagesCount
//       }
//     });

//   }, [dataState.data, isDataExist, pagesCount]);

//   setDataChunk(() => (
//     limitData(dataState.data, pages.currentPage, pagesCount)
//   ))

//   const checkIfDataExists = () => (
//     isDataExist ? (
//       <Fragment>
//         <button onClick={() => {sortById()}}>sortById</button>
//         <DataTable
//           currentPage={props.match.params.page}
//           data={dataChunk}
//           // sortBy={sortById}
//         />
//       </Fragment>
//     ) :
//     null
//   );

//   const checkIfLoading = () => (
//     dataState.loading ?
//     <div>loading...</div> :
//     checkIfDataExists()
//   );

//   return (
//     <>
//       <Pagination currentPage={pages.currentPage} pagesCount={pages.pagesCount}/>
//       {
//         checkIfLoading()
//       }
//       <div>
//         {
//           props.match.params.page ? props.match.params.page : 'none'
//         }
//       </div>
//     </>
//   )
// };
