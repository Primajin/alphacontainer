import React from 'react';
import { ThemeProvider } from 'react-jss';

import theme from './theme';
import RootComponent from './RootComponent';
import TestComponent from './TestComponent';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <RootComponent />
      <TestComponent />
    </>
  </ThemeProvider>
);

export default App;
