import React from 'react';
import {ThemeProvider} from 'react-jss'

import './App.css';
import theme from './theme';
import RootComponent from './RootComponent'

const App = () => <ThemeProvider theme={theme}><RootComponent/></ThemeProvider>;

export default App;
