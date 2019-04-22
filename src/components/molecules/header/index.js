import React from 'react';
import withStyles from 'react-jss';

import Logo from 'components/atoms/logo';

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
  <header>
    <Logo className={classes.logo} signetOnly />
  </header>
);

export default withStyles(style)(RootComponent);
