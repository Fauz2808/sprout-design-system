/**
 * Sprout Design System — Typography Component
 *
 * Matches Figma text styles:
 *   Heading:   h1–h6  (PlayfairDisplay-Medium)
 *   Paragraph: p1–p3  (Inter-Regular)
 *   Subhead:   s1–s3  (Inter-Medium)
 *   Caption:   c1–c3  (Inter-SemiBold / Medium / Regular at 10px)
 *
 * Figma file: EhpRiGZ5eJnBb132X9zewg
 */

import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { semanticColors, typography } from '../../tokens/theme';

// ─── Variant types ────────────────────────────────────────────────────────────

export type TypographyVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p1' | 'p2' | 'p3'
  | 's1' | 's2' | 's3'
  | 'c1' | 'c2' | 'c3';

export interface TypographyProps extends TextProps {
  /** Figma text style variant */
  variant?: TypographyVariant;
  /** Text color — defaults to semanticColors.content.primary */
  color?: string;
  /** Center-align text */
  center?: boolean;
  /** Children */
  children: React.ReactNode;
}

// ─── Style map ────────────────────────────────────────────────────────────────

const variantStyles: Record<TypographyVariant, TextStyle> = {
  // Headings — Playfair Display
  h1: { ...typography.heading.h1, fontWeight: '500' },
  h2: { ...typography.heading.h2, fontWeight: '500' },
  h3: { ...typography.heading.h3, fontWeight: '500' },
  h4: { ...typography.heading.h4, fontWeight: '500' },
  h5: { ...typography.heading.h5, fontWeight: '500' },
  h6: { ...typography.heading.h6, fontWeight: '500' },

  // Paragraphs — Inter Regular
  p1: { ...typography.paragraph.p1, fontWeight: '400' },
  p2: { ...typography.paragraph.p2, fontWeight: '400' },
  p3: { ...typography.paragraph.p3, fontWeight: '400' },

  // Subheadings — Inter Medium
  s1: { ...typography.subhead.s1, fontWeight: '500' },
  s2: { ...typography.subhead.s2, fontWeight: '500' },
  s3: { ...typography.subhead.s3, fontWeight: '500' },

  // Captions
  c1: { ...typography.caption.c1, fontWeight: '600' },
  c2: { ...typography.caption.c2, fontWeight: '500' },
  c3: { ...typography.caption.c3, fontWeight: '400' },
};

// ─── Component ───────────────────────────────────────────────────────────────

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p2',
  color,
  center = false,
  style,
  children,
  ...rest
}) => {
  return (
    <Text
      style={[
        variantStyles[variant],
        {
          color: color ?? semanticColors.content.primary,
          textAlign: center ? 'center' : undefined,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
