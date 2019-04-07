import React from 'react';
import withStyles from 'react-jss';

import logo from '../logo.svg';

const style = {
  App: {
    textAlign: 'center'
  },
  AppLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '40vmin',
    pointerEvents: 'none'
  },
  AppHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  AppLink: {
    color: '#61dafb'
  }
};

const RootComponent = ({classes}) =>
  <div className={classes.App}>
    <header className={classes.AppHeader}>
      <img src={logo} className={classes.AppLogo} alt="logo"/>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={classes.AppLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>;

export default withStyles(style)(RootComponent);
