import React from 'react';
import {Linking, Text} from 'react-native';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';
import {AppNavigator} from '../src/navigation/AppNavigator';

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

afterEach(() => {
  jest.restoreAllMocks();
});

type TestChild = ReactTestRenderer.ReactTestInstance | string | number;

const textFromNode = (node: TestChild): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  return node.children.map(child => textFromNode(child as TestChild)).join('');
};

const allText = (root: ReactTestRenderer.ReactTestInstance) =>
  root.findAllByType(Text).map(textFromNode).join('\n');

const findButtonByLabel = (
  root: ReactTestRenderer.ReactTestInstance,
  label: string,
) => {
  const button = root
    .findAll(node => node.props.accessibilityRole === 'button')
    .find(node => textFromNode(node).includes(label));

  if (!button) {
    throw new Error(`Could not find button: ${label}`);
  }

  return button;
};

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

test('opens the in-app map tab from place details', () => {
  const openURLSpy = jest.spyOn(Linking, 'openURL').mockResolvedValue();
  let renderer: ReactTestRenderer.ReactTestRenderer | undefined;

  ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(
      <AppNavigator
        savedPlaceIds={[]}
        savedArticleIds={[]}
        onTogglePlace={jest.fn()}
        onRemovePlace={jest.fn()}
        onToggleArticle={jest.fn()}
        onRemoveArticle={jest.fn()}
      />,
    );
  });

  const root = renderer!.root;

  ReactTestRenderer.act(() => {
    findButtonByLabel(root, 'View Details').props.onPress();
  });

  ReactTestRenderer.act(() => {
    findButtonByLabel(root, 'Open on Map').props.onPress();
  });

  expect(openURLSpy).not.toHaveBeenCalled();
  expect(allText(root)).toContain('Star Map');

  ReactTestRenderer.act(() => {
    renderer?.unmount();
  });
});
