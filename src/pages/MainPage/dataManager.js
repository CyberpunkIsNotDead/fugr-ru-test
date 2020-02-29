export const limitData = (data, currentPage, limitNumber) => {
  const limit = currentPage * limitNumber;
  const offset = limit - limitNumber;

  return data.slice(offset, limit)
};

export const sortData = data => data.sort((first, second) => first.id - second.id);
