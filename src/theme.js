import { mapValues, omit } from 'lodash';

// colors
const acpRed = '#e42621';
const mediumGrey = '#999';
const background = '#fff';

// mediaQueries
const xs = 575;
const sm = 576;
const md = 768;
const lg = 992;
const xl = 1200;

export const breakpoints = { xs, sm, md, lg, xl };

const mediaQueries = mapValues(
  omit(breakpoints, 'xs'),
  breakpoint => `@media (min-width: ${breakpoint}px)`
);
mediaQueries.xs = `@media (max-width: ${breakpoints.xs}px)`;

const theme = {
  colors: {
    background,
    primary: acpRed,
    secondary: mediumGrey
  },
  mediaQueries
};

export default theme;
