// const limitData = (data, currentPage, limitNumber) => {
//   const limit = currentPage * limitNumber;
//   const offset = limit - limitNumber;

//   return data.slice(offset, limit)
// };

const isDataExist = data => data !== null
  ? true
  : false;

const pagesCount = (data, pageLimit) => isDataExist(data)
  ? Math.floor(data.length / pageLimit)
  : 1;

const getPagesCount = (data, pageLimit) => pagesCount(data, pageLimit);

export default getPagesCount;
