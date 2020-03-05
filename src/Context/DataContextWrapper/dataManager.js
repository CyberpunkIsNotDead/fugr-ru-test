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

export const sortByField = (data, field, isAscending) => {
  switch (isAscending) {
    case true:
      return sortAscending(data, field);
    case false:
      return sortDescending(data, field);
    default:
      return sortAscending(data, field);
  };
};

const isIncludes = (string, subString) => (
  string.toLowerCase().includes(subString.toLowerCase())
);

const IterateOverObject = (dataObject, string) => (
  Object.values(dataObject).some(item => {
    switch (typeof(item)) {
      case 'string':
        return isIncludes(item, string);
      default:
        return false;
    }
  })
);

export const filterData = (data, string) => (
  data.filter(item => IterateOverObject(item, string))
);
