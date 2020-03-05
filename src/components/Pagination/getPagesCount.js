const isDataExist = data => data !== null
  ? true
  : false;

const pagesCount = (data, pageLimit) => isDataExist(data)
  ? Math.ceil(data.length / pageLimit)
  : 1;

const getPagesCount = (data, pageLimit) => pagesCount(data, pageLimit);

export default getPagesCount;
