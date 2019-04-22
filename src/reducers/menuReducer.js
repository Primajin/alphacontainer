import { defaultInitialState, defaultReducer, menuActionTypes } from 'invariables';

const { errorType, fetchType, loadingType } = menuActionTypes;

export const menuInitialState = { ...defaultInitialState };
export const menuReducer = defaultReducer(errorType, fetchType, loadingType, menuInitialState);
