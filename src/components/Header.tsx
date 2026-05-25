import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, typography} from '../theme';

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function Header({eyebrow, title, subtitle}: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.eyebrowRow}>
        <View style={styles.line} />
        <Text style={styles.eyebrow}>{eyebrow}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 18,
  },
  eyebrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  line: {
    width: 24,
    height: 1,
    marginRight: 8,
    backgroundColor: colors.yellow,
  },
  eyebrow: {
    color: colors.yellow,
    fontSize: typography.tiny,
    letterSpacing: 0,
    fontWeight: '700',
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    lineHeight: 31,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22,
    marginTop: 4,
  },
});
