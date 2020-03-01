// export const fetchData = async (url) => {
//   const response = await fetch(url);

//   if (response.ok) {
//     return await response.json();
//   } else {
//     throw new Error(
//       `Error while data fetching. Server response:${response.status}`
//       );
//   };
// };

export const limitData = (data, currentPage, limitNumber) => {
  const limit = currentPage * limitNumber;
  const offset = limit - limitNumber;

  return data.slice(offset, limit)
};

export const sortDataById = data => data.sort((first, second) => first.id - second.id);

export const sortByField = (data, field) => {
  switch (field) {
    case 'id':
      return data.sort((first, second) => first.id - second.id);
    default:
      return data.sort((first, second) => first[field] > second[field]
        ? 1
        : first[field] < second[field]
          ? -1
          : 0);
  };
};
