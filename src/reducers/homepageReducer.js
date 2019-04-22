import { homeError, homeFetch, homeLoading } from 'invariables';

export const homepageInitialState = {
  loading: false,
  data: {},
  error: null
};

export const homepageReducer = (state, { type, payload }) => {
  switch (type) {
    case homeError:
      return {
        ...state,
        ...payload
      };
    case homeFetch:
      return {
        ...state,
        ...payload,
        error: homepageInitialState.error
      };
    case homeLoading:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
