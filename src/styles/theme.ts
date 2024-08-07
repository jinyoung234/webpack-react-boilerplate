const color = {
  white: 'white',
  whiteBackground: '#f8f8fa',
  gray: '#acacac',
  gray100: '#f3f3f3',
  gray200: '#e8e8e8',
  gray300: '#dddddd',
  gray400: '#bbbbbb',
  gray500: '#a6a6a6',
  gray600: '#727272',
  gray700: '#5e5e5e',
  gray800: '#282828',
  black: '#000000',

  primaryDark: '#f19203',
  primary: '#ffa927',
  primaryLight1: '#ffc774',
  primaryLight2: '#ffe5be',
  primaryLight3: '#fff4e4',

  yellow: '#ffd600',

  redDark: '#c50000',
  red: '#FF3D3D',
  redLight: '#fff2f2',
};

const spacer = {
  spacing1: '4px',
  spacing2: '8px',
  spacing3: '16px',
  spacing4: '24px',
  spacing5: '32px',
  spacing6: '48px',
  spacing7: '64px',
};

const borderRadius = {
  small: '2px',
  medium: '8px',
};

const zIndex = {
  header: 2,
  overlay: 3,
};

export type ColorType = typeof color;
export type SpacerType = typeof spacer;
export type BorderRadiusType = typeof borderRadius;
export type ZIndexType = typeof zIndex;

export const theme = {
  color,
  spacer,
  borderRadius,
  zIndex,
};
