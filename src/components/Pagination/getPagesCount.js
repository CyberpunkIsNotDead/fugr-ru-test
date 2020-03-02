// const limitData = (data, currentPage, limitNumber) => {
//   const limit = currentPage * limitNumber;
//   const offset = limit - limitNumber;

//   return data.slice(offset, limit)
// };

const isDataExist = data => data !== null
  ? true
  : false;

const pagesCount = data => isDataExist(data)
  ? Math.floor(data.length / 4)
  : 1;

const getPagesCount = data => pagesCount(data);

export default getPagesCount;
