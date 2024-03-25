export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  main: string;
  button: string;
  background: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  primaryMedium: string;
  secondary: string;
  secondaryBright: string;
  secondaryDark: string;
  tertiary: string;
  success: string;
  successBright: string;
  successDark: string;
  failure: string;
  failureBright: string;
  failureDark: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  background: string;
  backgroundDisabled: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  card: string;
  headerBackground: string;

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
