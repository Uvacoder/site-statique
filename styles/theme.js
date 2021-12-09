/* eslint-disable comma-dangle */
const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920,
};
const mediaQueries = Object.keys(breakpoints).reduce(
  (response, key) => {
    const breakpoint = breakpoints[key];
    return {
      ...response,
      [key]: `@media (min-width: ${breakpoint}px)`,
    };
  },
  {
    lg: 0,
    md: 0,
    sm: 0,
    xs: 0,
    xl: 0,
  }
);
const colors = {
  color1: '#0D6CF6',
  color2: '#379AD9',
  color3: '#29BD66',
  color4: '#F3c210',
  color5: '#e84a3d',
  focus: '#0AA9C9',
  defaultBackground: '#F1EFF7',
  white: '#FFFFFF',
  headerBlue: '#00B1C0',
  orange: '#E55917',
  default: '#0065B2',
  focus: '#0AA9C9',
  soft: '#0065B2',
  green: '#28A745',
  create: '#0ABFAD',
  neutral: '#a8a8a8',
  danger: '#DC3545',
  hover: '#F20544',
  warning: '#ffc107',
  success: '#28a745',
  error: '#DC3545',
  info: '#0897CC',
  fontDefault: '#4C4C4C',
  grays: {
    dark: '#4C4C4C',
    darkLight: '#7B7B7B',
    medium: '#a8a8a8',
    mediumLight: '#E3E7EA',
    light: '#f6f6f6',
    extraLight: '#fcfcfc',
  },
};
const font = {
  fontTypeDefaultTitle: 'rufina',
  // fontTypeDefault: 'roboto',
};
const jobTypeColors = {
  ax: '#F20544',
  web: '#28A745',
  other: '#E55917',
  spontenous: '#7B7B7B',
  sap: '#FFC107',
};
const categoryColors = {
  ax: '#F3235A',
  news: '#42B15B',
  innovation: '#E5591B',
  sap: '#FFC107',
};
const FontFamily = {
  fontFamily: 'Raleway sans-serif',
};
export const theme = {
  colors,
  mediaQueries,
  jobTypeColors,
  categoryColors,
  font,
  FontFamily,
};
