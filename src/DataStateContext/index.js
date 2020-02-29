// import React, { createContext, useState } from 'react';

// export const DataTableContext = createContext();

// export const DataStateContext = (child) => {
//   const initialdataState = {
//     data: null,
//     loading: false,
//   };
  
//   const [dataState, setDataState] = useState(initialdataState);

//   const fetchData = async (url) => {
//     const response = await fetch(url);
  
//     if (response.ok) {
//       return await response.json();
//     } else {
//       throw new Error(
//         `Error while data fetching. Server response:${response.status}`
//         );
//     };
//   };
  
//   const limitData = (data, currentPage, limitNumber) => {
//     const limit = currentPage * limitNumber;
//     const offset = limit - limitNumber;
  
//     return data.slice(offset, limit)
//   };
  
//   const sortData = data => data.sort((first, second) => first.id - second.id);
  

//   return (
//     <DataTableContext.Provider
//       value={{
//         dataState,
//         setDataState,
//         fetchData,
//         limitData,
//         sortData
//       }}
//     >
//       { child }
//     </DataTableContext.Provider>
//   );
// };
