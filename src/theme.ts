import {Platform} from 'react-native';

export const colors = {
  black: '#030303',
  panel: '#151515',
  panelSoft: '#1e1e1e',
  panelStrong: '#242424',
  line: '#2b2b2b',
  lineBright: '#403600',
  text: '#f8f8f8',
  muted: '#8d8d8d',
  dim: '#5f5f5f',
  yellow: '#ffcb18',
  yellowSoft: '#3b3106',
  purple: '#6557ff',
  green: '#11b981',
  cyan: '#03a9d6',
  blue: '#3478db',
  danger: '#ff4444',
};

export const spacing = {
  x: 20,
  top: Platform.OS === 'android' ? 30 : 20,
  bottom: Platform.OS === 'android' ? 30 : 20,
  tabHeight: 72,
};

export const typography = {
  hero: 30,
  title: 26,
  cardTitle: 18,
  body: 15,
  small: 12,
  tiny: 10,
};

export const categoryColors = {
  dark: colors.purple,
  mountain: colors.green,
  lake: colors.cyan,
  coast: colors.blue,
};
