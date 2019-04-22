import { defaultInitialState, defaultReducer, homepageActionTypes } from 'invariables';

const { homeError, homeFetch, homeLoading } = homepageActionTypes;

export const homepageInitialState = {
  ...defaultInitialState
};

export const homepageReducer = defaultReducer(
  homeError,
  homeFetch,
  homeLoading,
  homepageInitialState
);
