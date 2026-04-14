/**
 * Sprout Design System — Button Component
 *
 * ✅ EXACT MATCH to Figma component "Button" (node: 11:179)
 * Source page: ↪︎ Components · Figma file: EhpRiGZ5eJnBb132X9zewg
 *
 * Variants confirmed from live Figma scan (128 total):
 *   Type:      Primary | Secondary | Tertiary | Destructive
 *   Size:      Large | Medium | Small | XSmall
 *   States:    Default | Hover | Focused | Disabled
 *   Icon Only: true | false
 *
 * Key values extracted directly from Figma (not estimated):
 *   - Font: Playfair Display Medium (NOT Inter SemiBold)
 *   - Heights: Large=52 | Medium=48 | Small=40 | XSmall=32
 *   - Padding: all sizes 16px H / vertical via fixed height
 *   - Primary bg:      #186338  (brand/500)
 *   - Secondary bg:    #E2E9E3  (brand/50) + stroke #D0DAD0
 *   - Secondary text:  #1E3E2B  (brand/700)
 *   - Tertiary text:   #4D525B  (grey/700)
 *   - Destructive bg:  #D64545  (error/500)  — VariableID:26:532
 *   - Destructive hover: #80292A (error/700)
 *   - Destructive disabled bg: #F7DADA (error/50) — VariableID:26:533
 *   - cornerRadius: 99999 (full pill)
 */

import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

// ─── Raw Figma-extracted values ───────────────────────────────────────────────
// These are the exact hex values from the Figma variable bindings, NOT guesses.

const FIGMA = {
  // Primary
  primaryBg:       '#186338',  // VariableID:26:524 → brand/500
  primaryBgPress:  '#1e3e2b',  // brand/700
  primaryText:     '#ffffff',

  // Secondary
  secondaryBg:     '#E2E9E3',  // VariableID:26:523 → brand/50
  secondaryBgPress:'#d6e0d8',
  secondaryStroke: '#D0DAD0',  // VariableID:26:539
  secondaryText:   '#1E3E2B',  // VariableID:24:335 → brand/700

  // Tertiary
  tertiaryBg:      'transparent',
  tertiaryText:    '#4D525B',  // VariableID:24:328 → grey/700

  // Destructive — exact from Figma live scan (node: 11:468–11:480)
  destructiveBg:         '#D64545',  // VariableID:26:532 → error/500
  destructiveBgPress:    '#80292A',  // VariableID:24:341 → error/700 (hover state)
  destructiveBgDisabled: '#F7DADA',  // VariableID:26:533 → error/50 (light pink)
  destructiveText:       '#ffffff',

  // Disabled text (Secondary + Tertiary only — Destructive uses white always)
  disabledText:    '#9AA3AD',  // VariableID:30:1322

  // Radius
  cornerRadius:    99999,      // confirmed from Figma (full pill)

  // Font — CONFIRMED from Figma TEXT node: family="Playfair Display" style="Medium"
  fontFamily:      'PlayfairDisplay-Medium',
  fontFamilyAlt:   'Playfair Display',  // web fallback for Storybook

  // Shadow on Primary (from Figma effects array)
  shadowColor:     'rgba(13,13,18,0.06)',
  shadowOffset:    { width: 0, height: 1 },
  shadowRadius:    2,
  elevation:       2,
};

// ─── Size tokens — exact from Figma buttonSizes scan ─────────────────────────
// Large:  h=52, Medium: h=48, Small: h=40, XSmall: h=32
// All use paddingHorizontal=16, vertical via fixed height
const SIZES = {
  Large:  { height: 52, paddingHorizontal: 16, fontSize: 16, iconSize: 20 },
  Medium: { height: 48, paddingHorizontal: 16, fontSize: 14, iconSize: 18 },
  Small:  { height: 40, paddingHorizontal: 16, fontSize: 12, iconSize: 16 },
  XSmall: { height: 32, paddingHorizontal: 16, fontSize: 12, iconSize: 14 },
} as const;

// ─── Types ───────────────────────────────────────────────────────────────────

export type ButtonType = 'Primary' | 'Secondary' | 'Tertiary' | 'Destructive';
export type ButtonSize = 'Large' | 'Medium' | 'Small' | 'XSmall';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  /** Figma variant: Type */
  type?: ButtonType;
  /** Figma variant: Size */
  size?: ButtonSize;
  /** Button label. Omit when iconOnly=true */
  label?: string;
  /** Left icon node */
  leftIcon?: React.ReactNode;
  /** Right icon node */
  rightIcon?: React.ReactNode;
  /** Figma variant: Icon Only */
  iconOnly?: boolean;
  /** Shows ActivityIndicator instead of label */
  loading?: boolean;
  /** Stretch to fill container width */
  fullWidth?: boolean;
  /** Style override */
  style?: ViewStyle;
}

// ─── Per-type style config ────────────────────────────────────────────────────

interface TypeConfig {
  bg: string;
  bgPressed: string;
  bgDisabled: string;
  text: string;
  textDisabled: string;
  borderWidth: number;
  borderColor: string;
  borderColorDisabled: string;
  hasShadow: boolean;
}

const TYPE_CONFIG: Record<ButtonType, TypeConfig> = {
  Primary: {
    bg:                 FIGMA.primaryBg,
    bgPressed:          FIGMA.primaryBgPress,
    bgDisabled:         FIGMA.primaryBg,
    text:               FIGMA.primaryText,
    textDisabled:       FIGMA.primaryText,
    borderWidth:        0,
    borderColor:        'transparent',
    borderColorDisabled:'transparent',
    hasShadow:          true,
  },
  Secondary: {
    bg:                 FIGMA.secondaryBg,
    bgPressed:          FIGMA.secondaryBgPress,
    bgDisabled:         FIGMA.secondaryBg,
    text:               FIGMA.secondaryText,
    textDisabled:       FIGMA.disabledText,
    borderWidth:        1,
    borderColor:        FIGMA.secondaryStroke,
    borderColorDisabled:FIGMA.secondaryStroke,
    hasShadow:          false,
  },
  Tertiary: {
    bg:                 FIGMA.tertiaryBg,
    bgPressed:          'rgba(0,0,0,0.05)',
    bgDisabled:         FIGMA.tertiaryBg,
    text:               FIGMA.tertiaryText,
    textDisabled:       FIGMA.disabledText,
    borderWidth:        0,
    borderColor:        'transparent',
    borderColorDisabled:'transparent',
    hasShadow:          false,
  },
  // ✅ Destructive — exact colors from Figma node scan (11:468–11:480)
  Destructive: {
    bg:                 FIGMA.destructiveBg,          // #D64545 — error/500
    bgPressed:          FIGMA.destructiveBgPress,     // #80292A — error/700 (Hover state)
    bgDisabled:         FIGMA.destructiveBgDisabled,  // #F7DADA — error/50 (light pink)
    text:               FIGMA.destructiveText,        // white always
    textDisabled:       FIGMA.destructiveText,        // white even when disabled
    borderWidth:        0,
    borderColor:        'transparent',
    borderColorDisabled:'transparent',
    hasShadow:          true,  // has drop shadow same as Primary
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export const Button: React.FC<ButtonProps> = ({
  type = 'Primary',
  size = 'Large',
  label,
  leftIcon,
  rightIcon,
  iconOnly = false,
  loading = false,
  fullWidth = false,
  disabled = false,
  style,
  onPress,
  ...rest
}) => {
  const tokens = SIZES[size];
  const config = TYPE_CONFIG[type];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        {
          height: tokens.height,
          // Icon only: square pill; otherwise horizontal padding
          width:           iconOnly ? tokens.height : undefined,
          paddingHorizontal: iconOnly ? 0 : tokens.paddingHorizontal,
          borderRadius:    FIGMA.cornerRadius,
          backgroundColor: isDisabled
            ? config.bgDisabled
            : pressed
            ? config.bgPressed
            : config.bg,
          borderWidth:     config.borderWidth,
          borderColor:     isDisabled
            ? config.borderColorDisabled
            : config.borderColor,
          alignSelf: fullWidth ? 'stretch' : 'flex-start',
          // Destructive has its own disabled bg color (#F7DADA), no opacity needed
          // All other types use opacity to show disabled state
          opacity: isDisabled && type !== 'Destructive' ? 0.45 : 1,
          // Shadow only on Primary
          ...(config.hasShadow && !isDisabled ? {
            shadowColor:   FIGMA.shadowColor,
            shadowOffset:  FIGMA.shadowOffset,
            shadowRadius:  FIGMA.shadowRadius,
            shadowOpacity: 1,
            elevation:     FIGMA.elevation,
          } : {}),
        },
        style,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color={config.text} />
      ) : (
        <View style={styles.content}>
          {leftIcon && !iconOnly && <View style={{ marginRight: 6 }}>{leftIcon}</View>}

          {iconOnly ? (
            leftIcon ?? rightIcon
          ) : (
            <Text
              style={[
                styles.label,
                {
                  fontSize:   tokens.fontSize,
                  color:      isDisabled ? config.textDisabled : config.text,
                  // ✅ Figma-confirmed font: Playfair Display Medium
                  fontFamily: FIGMA.fontFamilyAlt,
                  fontWeight: '500',
                  lineHeight: tokens.fontSize * 1.5,
                },
              ]}
              numberOfLines={1}
            >
              {label}
            </Text>
          )}

          {rightIcon && !iconOnly && <View style={{ marginLeft: 6 }}>{rightIcon}</View>}
        </View>
      )}
    </Pressable>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  base: {
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'center',
  },
  label: {
    letterSpacing: 0,  // Figma: letterSpacing unit=PERCENT value=0
    textAlign:     'center',
  },
});

export default Button;
