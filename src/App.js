import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from './theme';
import StoreProvider from './store';

import HomepageComponent from 'components/pages/homepage';

const App = () => (
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <>
        <HomepageComponent />
      </>
    </ThemeProvider>
  </StoreProvider>
);

export default App;
