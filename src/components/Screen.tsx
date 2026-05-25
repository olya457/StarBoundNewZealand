import React, {type ReactNode} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {colors, spacing} from '../theme';
import {StarField} from './StarField';

type Props = {
  children: ReactNode;
  scroll?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  noHorizontalPadding?: boolean;
  noBottomPadding?: boolean;
};

export function Screen({
  children,
  scroll = true,
  contentStyle,
  noHorizontalPadding = false,
  noBottomPadding = false,
}: Props) {
  const paddingBottom = noBottomPadding
    ? 0
    : spacing.tabHeight + spacing.bottom + 28;
  const content = (
    <View
      style={[
        styles.content,
        noHorizontalPadding && styles.noHorizontal,
        {paddingBottom},
        contentStyle,
      ]}>
      {children}
    </View>
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <StarField />
      {scroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scroll}>
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scroll: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    paddingTop: spacing.top + 24,
    paddingHorizontal: spacing.x,
  },
  noHorizontal: {
    paddingHorizontal: 0,
  },
});
