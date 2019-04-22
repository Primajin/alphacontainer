import axios from 'axios';

import { backendUrl, menuActionTypes } from 'invariables';

const { errorType, fetchType, loadingType } = menuActionTypes;
const endpoint = '/entity/menu/main/tree';

export const transformApiDataForMenu = rawData => {
  if (rawData && rawData.length) {
    return rawData.map(item => {
      return item.link.title;
    });
  }

  return {};
};

export const getMenuItems = async dispatch => {
  dispatch({
    type: loadingType,
    payload: { loading: true }
  });

  await axios
    .get(`${backendUrl}/${endpoint}`)
    .then(({ data }) => {
      dispatch({
        type: fetchType,
        payload: {
          data: transformApiDataForMenu(data)
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
