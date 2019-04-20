import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from './theme';
import StoreProvider from './store';

import RootComponent from './components/RootComponent';
import TestComponent from './components/TestComponent';
import DummyComponent from './components/DummyComponent';

const App = () => (
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <>
        <RootComponent />
        <TestComponent />
        <DummyComponent />
      </>
    </ThemeProvider>
  </StoreProvider>
);

export default App;
