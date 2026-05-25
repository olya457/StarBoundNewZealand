import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, typography} from '../theme';

type Props = {
  label: string;
  color?: string;
};

export function Badge({label, color = colors.purple}: Props) {
  return (
    <View style={[styles.badge, {backgroundColor: color}]}>
      <Text numberOfLines={1} style={styles.text}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  text: {
    color: colors.text,
    fontSize: typography.tiny,
    lineHeight: 12,
    fontWeight: '800',
  },
});
