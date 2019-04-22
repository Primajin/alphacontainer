import React, { useReducer } from 'react';

import { homepageInitialState, homepageReducer, menuInitialState, menuReducer } from 'reducers';

export const Store = React.createContext(undefined);

export default ({ children }) => {
  // Combine reducers
  const [homepageState, homepageDispatch] = useReducer(homepageReducer, homepageInitialState);
  const [menuState, menuDispatch] = useReducer(menuInitialState, menuReducer);

  // Export as one store
  const store = {
    homepage: [homepageState, homepageDispatch],
    menu: [menuState, menuDispatch]
  };

  return <Store.Provider value={store}>{children}</Store.Provider>;
};
