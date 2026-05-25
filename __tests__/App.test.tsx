import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native-webview', () => {
  const ReactMock = require('react');
  const {View} = require('react-native');

  return {
    WebView: (props: object) => ReactMock.createElement(View, props),
  };
});

jest.mock('react-native-maps', () => {
  const ReactMock = require('react');
  const {View} = require('react-native');
  const MapView = ({children, ...props}: {children?: React.ReactNode}) =>
    ReactMock.createElement(View, props, children);
  const Marker = ({children, ...props}: {children?: React.ReactNode}) =>
    ReactMock.createElement(View, props, children);

  return {
    __esModule: true,
    default: MapView,
    Marker,
    PROVIDER_GOOGLE: 'google',
  };
});

test('renders correctly', async () => {
  jest.useFakeTimers();
  let renderer: ReactTestRenderer.ReactTestRenderer | undefined;

  await ReactTestRenderer.act(async () => {
    renderer = ReactTestRenderer.create(<App />);
  });

  await ReactTestRenderer.act(async () => {
    renderer?.unmount();
  });

  jest.useRealTimers();
});
