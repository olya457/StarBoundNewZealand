import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {colors, typography} from '../theme';

type Variant = 'primary' | 'dark' | 'outline' | 'ghost';

type Props = {
  label: string;
  onPress: () => void;
  emoji?: string;
  variant?: Variant;
  style?: ViewStyle;
  disabled?: boolean;
};

export function AppButton({
  label,
  onPress,
  emoji,
  variant = 'primary',
  style,
  disabled = false,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        styles[variant],
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}>
      <Text
        style={[
          styles.text,
          variant === 'primary' ? styles.primaryText : styles.lightText,
        ]}>
        {emoji ? `${emoji}  ` : ''}
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
  },
  dark: {
    backgroundColor: colors.panelSoft,
    borderColor: colors.line,
  },
  outline: {
    backgroundColor: colors.yellowSoft,
    borderColor: colors.yellow,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: colors.line,
  },
  pressed: {
    opacity: 0.78,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: typography.small,
    lineHeight: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
  primaryText: {
    color: colors.black,
  },
  lightText: {
    color: colors.text,
  },
});
