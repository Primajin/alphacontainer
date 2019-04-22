import { defaultInitialState, defaultReducer, homepageActionTypes } from 'invariables';

const { errorType, fetchType, loadingType } = homepageActionTypes;

export const homepageInitialState = { ...defaultInitialState };
export const homepageReducer = defaultReducer(
  errorType,
  fetchType,
  loadingType,
  homepageInitialState
);
