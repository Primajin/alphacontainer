export * from './actionTypes';

export const backendUrl = 'https://api.alphacontainer.de';
export const apiUrl = backendUrl + '/1';

export const defaultInitialState = { data: {}, error: null, loading: false };
export const defaultReducer = (caseError, caseFetch, caseLoading, initialState) => (
  state,
  { type, payload }
) => {
  switch (type) {
    case caseError:
      return {
        ...state,
        ...payload
      };
    case caseFetch:
      return {
        ...state,
        ...payload,
        error: initialState.error
      };
    case caseLoading:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
