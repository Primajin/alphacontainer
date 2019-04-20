import React, { useReducer } from 'react';
import errorReducer, { errorInitialState } from './reducers/errorReducer';
import dummyReducer, { dummyInitialState } from './reducers/dummyReducer';

export const Store = React.createContext(undefined);

export default ({ children }) => {
  // Combine reducers
  const [dummyState, dummyDispatch] = useReducer(
    dummyReducer,
    dummyInitialState
  );
  const [errorState, errorDispatch] = useReducer(
    errorReducer,
    errorInitialState
  );

  // Export as one store
  const store = {
    dummy: [dummyState, dummyDispatch],
    error: [errorState, errorDispatch]
  };

  return <Store.Provider value={store}>{children}</Store.Provider>;
};
