import React from 'react';
import withStyles from 'react-jss';
import classnames from 'classnames';

const style = ({
  breakpoints: { lg },
  colors: { primary: primaryColor, secondary: secondaryColor }
}) => ({
  primary: {
    fill: primaryColor
  },
  secondary: {
    fill: secondaryColor
  },
  hideOnLarge: {
    [lg]: {
      display: 'none'
    }
  }
});

const Logo = ({ classes, className, signetOnly, sloganOnly }) => (
  <svg
    className={className}
    viewBox="0 0 115.2 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={classnames(
        { [classes.hideOnLarge]: signetOnly },
        classes.primary
      )}
      d="M43.5 61.9h-3.3l-.8 2.7h-1.8l3.2-10h2.1l3.2 10h-1.9l-.7-2.7zm-.4-1.4l-.4-1.2-.4-1.6-.4-1.7h-.1l-.4 1.7-.5 1.6-.4 1.2h2.6zm6.4-5.9h1.8v8.5H56v1.5h-6.5v-10zm9.9 0h3.4a6 6 0 0 1 1.5.2l1.2.5c.3.2.6.6.8 1 .2.4.3.9.3 1.5s-.1 1-.3 1.4l-.8 1c-.3.3-.7.5-1.2.6l-1.5.2h-1.6v3.7h-1.8V54.6zm3.2 4.9c1.5 0 2.2-.6 2.2-1.8 0-.6-.2-1.1-.6-1.3s-.9-.4-1.7-.4H61v3.5h1.6zm7-4.9h1.8v4h3.4v-4h1.8v10h-1.8v-4.4h-3.4v4.4h-1.8v-10zm15.5 7.3h-3.3l-.8 2.7h-1.8l3.2-10h2.1l3.2 10h-1.9l-.7-2.7zm-.4-1.4l-.4-1.2-.4-1.6-.4-1.7h-.1l-.4 1.7-.5 1.6-.4 1.2h2.6z"
    />
    <path
      className={classnames({ [classes.hideOnLarge]: signetOnly })}
      d="M0 77.5c0-.8.1-1.5.3-2.1s.5-1.2.9-1.6.9-.8 1.4-1 1.1-.3 1.8-.3a3 3 0 0 1 1.6.4c.5.2.9.5 1.2.8l-1 1.1-.8-.6-1-.2-1.1.2-.9.7L2 76l-.2 1.5L2 79c.1.4.3.8.6 1.1.2.3.5.5.9.7l1 .2c.4 0 .7-.1 1.1-.3l.9-.7.9 1c-.4.5-.8.8-1.3 1s-1 .4-1.7.4c-.6 0-1.2-.1-1.7-.3-.5-.2-1-.5-1.4-1-.4-.4-.7-.9-.9-1.6a4 4 0 0 1-.4-2zm13.6 5c-.6 0-1.1-.1-1.5-.3-.5-.2-.9-.6-1.2-1a6 6 0 0 1-1.1-3.7c0-.8.1-1.5.3-2.1s.4-1.1.8-1.6a4 4 0 0 1 1.2-1 4 4 0 0 1 3 0c.5.2.9.6 1.2 1 .3.4.6.9.8 1.6.2.6.3 1.3.3 2.1s-.1 1.5-.3 2.1c-.2.6-.4 1.1-.8 1.6s-.7.8-1.2 1a4 4 0 0 1-1.5.3zm0-1.5c.3 0 .6-.1.8-.3.3-.2.5-.4.6-.7l.4-1.1.1-1.5c0-1.1-.2-1.9-.6-2.5-.4-.6-.9-.9-1.5-.9s-1.1.3-1.5.9-.6 1.5-.6 2.5l.1 1.5.4 1.1.6.7 1.2.3zm6.7-8.3H22l2.6 5.4.9 2.1-.1-1.6-.1-1.7v-4.2h1.6v9.6h-1.7l-2.6-5.4-.9-2 .1 1.6.1 1.7v4.2h-1.6v-9.7zm12.5 1.4h-3v-1.4h7.8v1.4h-3v8.2h-1.7l-.1-8.2zm12.4 5.6H42l-.8 2.6h-1.7l3.1-9.6h2l3.1 9.6H46l-.8-2.6zm-.3-1.3l-.3-1.2-.4-1.6-.4-1.6h-.1l-.4 1.6-.4 1.6-.3 1.2h2.3zm5.6 2.5h2.3v-6.8h-2.3v-1.4h6.4v1.4h-2.3v6.8h2.3v1.4h-6.4v-1.4zm9.9-8.2h1.7l2.6 5.4.9 2.1-.1-1.6-.1-1.7v-4.2H67v9.6h-1.7l-2.6-5.4-.9-2 .1 1.6.1 1.6v4.2h-1.6v-9.6zm10.5 0H77v1.4h-4.5v2.5h3.8V78h-3.8v2.8h4.6v1.4h-6.3v-9.5h.1zm14.9 9.6l-2.1-3.8h-1.4v3.8h-1.7v-9.6h3.2l1.4.1 1.1.5c.3.2.6.5.8.9a3.5 3.5 0 0 1-.2 3.2c-.3.5-.8.8-1.4 1l2.3 4h-2v-.1zm-3.5-5.1h1.3c.7 0 1.2-.1 1.5-.4s.5-.7.5-1.2c0-.6-.2-.9-.5-1.2a3 3 0 0 0-1.5-.3h-1.3v3.1z"
    />
    <path
      className={classnames(
        { [classes.hideOnLarge]: signetOnly },
        classes.secondary
      )}
      d="M10.8 90.2H14l1.5.1 1.2.5c.3.2.6.5.8.9.2.4.3.8.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.4.7-.8 1s-.7.5-1.2.6a6 6 0 0 1-1.5.2h-1.5v3.5h-1.7v-9.6zm3.1 4.7c1.4 0 2.1-.6 2.1-1.8 0-.6-.2-1-.5-1.3-.4-.2-.9-.3-1.6-.3h-1.4v3.4h1.4zm6.9 3.5h2.3v-6.8h-2.3v-1.4h6.4v1.4h-2.3v6.8h2.3v1.4h-6.4v-1.4zm9.7-3.4c0-.8.1-1.5.3-2.1a4.2 4.2 0 0 1 2.3-2.6c.5-.2 1.1-.3 1.8-.3a3 3 0 0 1 1.6.4c.5.2.9.5 1.2.8l-1 1.1-.8-.6-1-.2-1.1.2-.9.7-.6 1.1-.2 1.5.2 1.5c.1.4.3.8.6 1.1.2.3.5.5.9.7.3.2.7.2 1.1.2.4 0 .7-.1 1.1-.3l.9-.7.9 1c-.4.5-.8.8-1.3 1s-1 .4-1.7.4c-.6 0-1.2-.1-1.7-.3-.5-.2-1-.5-1.4-1-.4-.4-.7-.9-.9-1.6-.2-.5-.3-1.2-.3-2zm12.7-3.4h-3v-1.4H48v1.4h-3v8.2h-1.7l-.1-8.2zm7.5-1.4h1.7v6.1c0 .8.1 1.4.4 1.7.3.3.7.5 1.2.5s.9-.2 1.3-.5c.3-.3.5-.9.5-1.7v-6.1h1.6v6c0 1.3-.3 2.3-.9 2.9-.6.6-1.4.9-2.5.9s-1.9-.3-2.5-.9-.9-1.6-.9-2.9v-6h.1zm15.4 9.6l-2-3.8h-1.4v3.8H61v-9.6h3.2l1.4.1 1.1.5c.3.2.6.5.8.9a3.5 3.5 0 0 1-.2 3.2c-.3.5-.8.8-1.4 1l2.3 4h-2.1v-.1zm-3.5-5.1h1.3c.7 0 1.2-.1 1.5-.4.4-.3.6-.7.6-1.3s-.2-.9-.5-1.2a3 3 0 0 0-1.5-.3h-1.3v3.2h-.1zm8.6-4.5h6.2v1.4h-4.5v2.5h3.8v1.4h-3.8v2.8h4.6v1.4h-6.3v-9.5zm10.4 7.2l1.2.8c.5.2.9.3 1.4.3.6 0 1-.1 1.3-.3.3-.2.5-.5.5-.9l-.1-.5-.3-.4-.5-.3-.7-.3-1.3-.6a3 3 0 0 1-.8-.4l-.7-.5-.5-.7-.2-.9c0-.4.1-.7.3-1.1l.7-.9c.3-.3.6-.4 1.1-.6l1.3-.2a4.2 4.2 0 0 1 3.1 1.2l-.9 1.1c-.3-.3-.7-.5-1-.6l-1.2-.2c-.5 0-.9.1-1.2.3a1 1 0 0 0-.4.8l.1.5.4.4.5.3.6.3 1.3.5.8.4.7.5.4.7.2.9-.2 1.1-.7.9c-.3.3-.7.5-1.1.6-.4.2-.9.2-1.5.2a4 4 0 0 1-1.9-.4c-.6-.2-1.2-.6-1.7-1l1-1z"
    />
    <path
      className={classnames(classes.hideOnLarge, classes.primary)}
      d="M93.7 100h6V42.4h-6"
    />
    <path
      className={classnames(
        { [classes.hideOnLarge]: sloganOnly },
        classes.primary
      )}
      d="M54.9 27.5v-19l-2.4-2.4h-4.3l-2.4 2.4h-6.1V6.1l6-6.1h9.2L61 6.1v21.4h-6.1zm-9.2 0l-6.1-6.1v-4.6l6.1-6.1h6.1v6.1h-3.7l-2.4 2.3 2.4 2.3h3.7v6.1h-6.1zm27.3 0l-6.1-6.1V6.1L73 0h3.1v6.1h-.6L73 8.5V19l2.4 2.4h.6v6.1h-3zm9.2-19l-2.4-2.4h-.6V0h3.1l6.1 6.1v2.4h-6.2zm0 19h-3.1v-6.1h.6l2.4-2.4h6.1v2.4l-6 6.1zm26.8 0h-6.1v-6.1h3.6L109 19V8.5l-2.5-2.4h-3.6V0h6.1l6.1 6.1v15.3l-6.1 6.1zM93.7 0h6v42.4h-6V0z"
    />
  </svg>
);

Logo.defaultProps = {
  signetOnly: false,
  sloganOnly: false
};

export default withStyles(style)(Logo);
