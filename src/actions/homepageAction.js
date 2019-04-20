import axios from 'axios';
import normalize from 'json-api-normalizer';

import { apiUrl, homeError, homeFetch, homeLoading } from '../constants';
import { transformApiData } from '../utils';

const endpoint = 'node/article';

export const getHomepageItems = dispatch => {
  dispatch({
    type: homeLoading,
    payload: { loading: true }
  });

  axios
    .get(
      apiUrl +
        endpoint +
        '?include=field_loop&fields%5Bnode--article%5D=title,created,field_loop&fields%5Bfile--file%5D=uri,url&filter%5Bloop%5D%5Bpath%5D=field_loop.id&filter%5Bloop%5D%5Boperator%5D=%3C%3E&filter%5Bloop%5D%5Bvalue%5D=0'
    )
    .then(({ data }) => {
      dispatch({
        type: homeFetch,
        payload: {
          data: transformApiData(normalize(data, { endpoint }), endpoint)
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
