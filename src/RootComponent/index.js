import React from 'react';
import withStyles from 'react-jss';

import logo from '../logo.svg';

const style = ({ colors: { primary: primaryColor } }) => ({
  Logo: {
    fill: primaryColor,
    height: 'auto',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  }
});

const RootComponent = ({ classes }) => (
  <img src={logo} className={classes.Logo} alt="logo" />
);

export default withStyles(style)(RootComponent);
