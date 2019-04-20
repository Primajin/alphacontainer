import React from 'react';
import withStyles from 'react-jss';

import Logo from '../atoms/logo';

const style = () => ({
  Logo: {
    height: 'auto',
    left: '50%',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  }
});

const RootComponent = ({ classes }) => (
  <Logo className={classes.Logo} signetOnly />
);

export default withStyles(style)(RootComponent);
