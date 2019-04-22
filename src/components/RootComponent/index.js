import React from 'react';
import withStyles from 'react-jss';

import Logo from '../atoms/logo';

const style = () => ({
  logo: {
    height: 'auto',
    left: '50%',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    zIndex: -1
  }
});

const RootComponent = ({ classes }) => (
  <Logo className={classes.logo} signetOnly />
);

export default withStyles(style)(RootComponent);
