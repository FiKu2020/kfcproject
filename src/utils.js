export const groupBy = (array, callbackFN) => {
  return array.reduce((acc, item) => {
    const key = callbackFN(item);
    (acc[key] ||= []).push(item);
    return acc;
  }, {});
};
