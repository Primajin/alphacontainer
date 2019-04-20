// import { keys } from 'lodash';

export const transformApiData = (data, endpoint) => {
  return { ...data, count: data.meta[endpoint].meta.count };
};
