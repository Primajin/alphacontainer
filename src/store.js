import React, { useReducer } from 'react';
import homepageReducer, { homepageInitialState } from './reducers/homepageReducer';

export const Store = React.createContext(undefined);

export default ({ children }) => {
  // Combine reducers
  const [homepageState, homepageDispatch] = useReducer(
    homepageReducer,
    homepageInitialState
  );

  // Export as one store
  const store = {
    homepage: [homepageState, homepageDispatch]
  };

  return <Store.Provider value={store}>{children}</Store.Provider>;
};
