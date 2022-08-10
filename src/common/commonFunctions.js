export const sortArrayOfObjectsByProperty = (items, name) => {
  const result = items.sort((a, b) => {
    const nameA = a[name].toUpperCase(); // ignore upper and lowercase
    const nameB = b[name].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return result;
};

export const addOrderedIdTOArrayOfObjects = (items) => {
  const result = items.map((data, idx) => ({ id: idx, ...data }));
  return result;
};
