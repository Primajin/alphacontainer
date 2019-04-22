import axios from 'axios';
import normalize from 'json-api-normalizer';
import { camelCase, mapValues } from 'lodash';

import { apiUrl, homepageActionTypes } from 'invariables';

const { errorType, fetchType, loadingType } = homepageActionTypes;
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
      const urls = mapValues(item.relationships, relationship => {
        const fileData = relationship.data;

        if (
          rawData.hasOwnProperty(fileData.type) &&
          rawData[fileData.type].hasOwnProperty(fileData.id) &&
          rawData[fileData.type][fileData.id].hasOwnProperty('attributes')
        ) {
          return rawData[fileData.type][fileData.id].attributes.uri.url;
        }
      });

      return { ...item.attributes, ...urls };
    });

    transformedData = { ...transformedData, results };
  }

  return { ...transformedData };
};

export const getHomepageItems = async dispatch => {
  dispatch({
    type: loadingType,
    payload: { loading: true }
  });

  // TODO: Get Image style instead of plain original file

  await axios
    .get(
      `${apiUrl}/${endpoint}?include=field_loop,field_fallback&fields%5Bnode--article%5D=title,created,field_loop,field_subheadline,field_fallback&fields%5Bfile--file%5D=uri,url&filter%5Bloop%5D%5Bpath%5D=field_loop.id&filter%5Bloop%5D%5Boperator%5D=%3C%3E&filter%5Bloop%5D%5Bvalue%5D=0`
    )
    .then(({ data }) => {
      dispatch({
        type: fetchType,
        payload: {
          data: transformApiDataForHomepage(normalize(data, { endpoint }), endpoint)
        }
      });

      dispatch({
        type: loadingType,
        payload: { loading: false }
      });
    })
    .catch(error => {
      dispatch({
        type: errorType,
        payload: { error: error.message }
      });

      dispatch({
        type: loadingType,
        payload: { loading: false }
      });
    });
};
