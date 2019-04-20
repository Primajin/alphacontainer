import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from './theme';
import StoreProvider from './store';

import RootComponent from './components/RootComponent';
import HomepageComponent from './components/HomeComponent';

const App = () => (
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <>
        <RootComponent />
        <HomepageComponent />
      </>
    </ThemeProvider>
  </StoreProvider>
);

export default App;
