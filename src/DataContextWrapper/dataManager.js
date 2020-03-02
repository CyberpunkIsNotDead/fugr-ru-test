import { ASCENDING_ORDER, DESCENDING_ORDER } from "./actionTypes";

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

const sortAscending = (data, field) => (
  data.sort((first, second) => first[field] > second[field]
        ? 1
        : first[field] < second[field]
          ? -1
          : 0
  )
);

const sortDescending = (data, field) => (
  data.sort((first, second) => first[field] > second[field]
        ? -1
        : first[field] < second[field]
          ? 1
          : 0
  )
);

export const sortByField = (data, field, sortOrder) => {
  switch (sortOrder) {
    case ASCENDING_ORDER:
      return sortAscending(data, field);
    case DESCENDING_ORDER:
      return sortDescending(data, field);
    default:
      return sortAscending(data, field);
  };
};
