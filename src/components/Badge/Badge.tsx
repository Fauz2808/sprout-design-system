/**
 * Sprout Design System — Badge / Indicator Component
 *
 * Matches Figma component: "Indicator / Badge"
 * Variants:
 *   - Variant: Dot | Count | Label
 *   - Color:   Brand | Success | Error | Warning | Info | Neutral
 *   - Size:    Large | Medium | Small
 *
 * Figma file: EhpRiGZ5eJnBb132X9zewg
 */

import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, radius, typography } from '../../tokens/theme';

// ─── Types ───────────────────────────────────────────────────────────────────

export type BadgeVariant = 'Dot' | 'Count' | 'Label';
export type BadgeColor   = 'Brand' | 'Success' | 'Error' | 'Warning' | 'Info' | 'Neutral';
export type BadgeSize    = 'Large' | 'Medium' | 'Small';

export interface BadgeProps {
  /** Figma: Variant — Dot shows no text, Count shows number, Label shows text */
  variant?: BadgeVariant;
  /** Figma: Color */
  color?: BadgeColor;
  /** Figma: Size */
  size?: BadgeSize;
  /** Text for Label variant or number for Count variant */
  label?: string | number;
  /** Max count — shows "99+" if count exceeds this */
  maxCount?: number;
  /** Override container style */
  style?: ViewStyle;
}

// ─── Token maps ──────────────────────────────────────────────────────────────

const colorMap: Record<BadgeColor, { bg: string; text: string }> = {
  Brand:   { bg: colors.brand[500],   text: colors.neutral.white },
  Success: { bg: colors.success[500], text: colors.neutral.white },
  Error:   { bg: colors.error[500],   text: colors.neutral.white },
  Warning: { bg: colors.warning[500], text: colors.neutral.white },
  Info:    { bg: colors.info[500],    text: colors.neutral.white },
  Neutral: { bg: colors.grey[500],    text: colors.neutral.white },
};

const sizeMap: Record<BadgeSize, { dot: number; minWidth: number; height: number; fontSize: number; px: number }> = {
  Large:  { dot: 12, minWidth: 24, height: 24, fontSize: 11, px: 8  },
  Medium: { dot: 8,  minWidth: 20, height: 20, fontSize: 10, px: 6  },
  Small:  { dot: 6,  minWidth: 16, height: 16, fontSize: 9,  px: 4  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export const Badge: React.FC<BadgeProps> = ({
  variant = 'Count',
  color = 'Brand',
  size = 'Medium',
  label,
  maxCount = 99,
  style,
}) => {
  const { bg, text } = colorMap[color];
  const tokens = sizeMap[size];

  if (variant === 'Dot') {
    return (
      <View
        style={[
          {
            width: tokens.dot,
            height: tokens.dot,
            borderRadius: radius.full,
            backgroundColor: bg,
          },
          style,
        ]}
      />
    );
  }

  // Format count
  const displayLabel =
    variant === 'Count' && typeof label === 'number' && label > maxCount
      ? `${maxCount}+`
      : String(label ?? '');

  return (
    <View
      style={[
        styles.pill,
        {
          backgroundColor: bg,
          height: tokens.height,
          minWidth: tokens.minWidth,
          paddingHorizontal: tokens.px,
          borderRadius: radius.full,
        },
        style,
      ]}
    >
      <Text
        style={{
          color: text,
          fontSize: tokens.fontSize,
          fontFamily: typography.fonts.semiBold,
          fontWeight: '600',
          lineHeight: tokens.fontSize * 1.4,
        }}
        numberOfLines={1}
      >
        {displayLabel}
      </Text>
    </View>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  pill: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});

export default Badge;
