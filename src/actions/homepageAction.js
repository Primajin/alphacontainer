import axios from 'axios';
import normalize from 'json-api-normalizer';
import { camelCase, mapValues } from 'lodash';

import { apiUrl, homeError, homeFetch, homeLoading } from '../constants';

const endpoint = 'node/article';

export const transformApiDataForHomepage = (rawData, endpoint) => {
  const endPoint = camelCase(endpoint);
  let transformedData = undefined;

  if (
    rawData.hasOwnProperty('meta') &&
    rawData.meta.hasOwnProperty(endpoint) &&
    rawData.meta[endpoint].hasOwnProperty('meta')
  ) {
    transformedData = { count: rawData.meta[endpoint].meta.count };
  }

  if (rawData.hasOwnProperty(endPoint)) {
    const data = rawData[endPoint];
    const results = mapValues(data, item => {
      const loopData = item.relationships.fieldLoop.data;
      let url = undefined;

      if (
        rawData.hasOwnProperty(loopData.type) &&
        rawData[loopData.type].hasOwnProperty(loopData.id) &&
        rawData[loopData.type][loopData.id].hasOwnProperty('attributes')
      ) {
        url = rawData[loopData.type][loopData.id].attributes.uri.url;
      }

      return { ...item.attributes, url };
    });

    transformedData = { ...transformedData, results };
  }

  return { ...transformedData };
};

export const getHomepageItems = dispatch => {
  dispatch({
    type: homeLoading,
    payload: { loading: true }
  });

  axios
    .get(
      apiUrl +
        endpoint +
        '?include=field_loop&fields%5Bnode--article%5D=title,created,field_loop,field_subheadline&fields%5Bfile--file%5D=uri,url&filter%5Bloop%5D%5Bpath%5D=field_loop.id&filter%5Bloop%5D%5Boperator%5D=%3C%3E&filter%5Bloop%5D%5Bvalue%5D=0'
    )
    .then(({ data }) => {
      dispatch({
        type: homeFetch,
        payload: {
          data: transformApiDataForHomepage(
            normalize(data, { endpoint }),
            endpoint
          )
        }
      });

      dispatch({
        type: homeLoading,
        payload: { loading: false }
      });
    })
    .catch(error => {
      dispatch({
        type: homeError,
        payload: { error: error.message }
      });

      dispatch({
        type: homeLoading,
        payload: { loading: false }
      });
    });
};
