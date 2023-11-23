export const checkActiveLink = (currentPathname, url, isExact) =>
  isExact ? currentPathname === url : currentPathname.includes(url);

export const getConditionalClass = (booleanCondition, className) =>
  booleanCondition ? className : '';

export const setBooleanProp = bool => (bool ? 'true' : undefined);

export const initPaginationData = () => ({
  total: 0,
  total_pages: 0,
  perPage: 0,
  page: 0,
  current_page_total: 0,
  from: 0,
  to: 0,
});

export const queryBuilder = (queryObj, keys) => {
  let reqQuery = '?';

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = queryObj[key];
    reqQuery += value ? `&${key}=${value}` : '';
  }

  return reqQuery === '?' ? '' : reqQuery;
};

export const capitalize = (words, delimiter) =>
  words
    .split(delimiter)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
