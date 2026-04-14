/**
 * Sprout Design System — Input Component
 *
 * ✅ EXACT MATCH to Figma "Input Form" (node: 33:8502)
 * Source page: ↪︎ Components · Figma file: EhpRiGZ5eJnBb132X9zewg
 *
 * Variants confirmed from live Figma scan (10 total):
 *   State: Normal | Focused | Filled | Disable | Error
 *   Size:  Large | Medium
 *
 * Key values extracted directly from Figma (not estimates):
 *   - cornerRadius:  10 (confirmed on "Input" frame inside each variant)
 *   - Field bg Normal/Focused/Filled: #EAE6DB (secondary/600)
 *   - Field bg Disabled:              #CDCFD6 (grey/200)
 *   - Field bg Error:                 #F4F1EA (secondary/500 — lighter cream)
 *   - Stroke Normal/Focused/Filled:   #E6E7EA (grey/100), weight=1
 *   - Stroke Disabled:                #CDCFD6, weight=1
 *   - Stroke Error:                   #D64545, weight=1
 *   - Padding Large: l=10 r=10 t=8 b=8
 *   - Padding Medium: l=10 r=10 t=6 b=6
 *   - Field height Large:  59px  |  Medium: 50px
 *   - Wrapper gap (field→hint): 4px
 *   - Left Content layout: VERTICAL, gap=2
 *   - Floating label (inside field): Inter Regular 12px, #1E3E2B (brand/700)
 *   - Placeholder text: Playfair Display Medium 14px, #818898 (grey/500)
 *   - Filled text color:  #1E3E2B (brand/700)
 *   - Hint text: Inter Regular 12px, #7D715E (normal/focused/filled)
 *   - Hint text disabled: #9AA0AD (grey/400)
 *   - Hint text error:    #D64545 (error/500)
 *   - Left outer icon:  24×24 (both sizes)
 *   - Inner leading icon: 20×20 (Large) / 16×16 (Medium)
 *   - Right icon:  20×20 (Large) / 16×16 (Medium)
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

// ─── Raw Figma-extracted values ───────────────────────────────────────────────

const FIGMA = {
  // Field backgrounds — exact from Figma fills (live scan)
  fieldBg:          '#EAE6DB',  // VariableID:26:555 — secondary/600 (darker cream)
  fieldBgDisabled:  '#CDCFD6',  // grey/200 — disabled state fill
  fieldBgError:     '#F4F1EA',  // secondary/500 — lighter cream on error

  // Strokes — 1px border on all states
  strokeNormal:     '#E6E7EA',  // grey/100 — Normal/Focused/Filled
  strokeDisabled:   '#CDCFD6',  // grey/200 — same as disabled bg
  strokeError:      '#D64545',  // error/500 — red border on error
  strokeWeight:     1,

  // Corner radius — confirmed from "Input" inner frame
  cornerRadius:     10,

  // Floating label inside the field (above input row)
  // Figma: Inter Regular 12px, color brand/700
  labelFont:        'Inter',
  labelFontWeight:  '400' as const,
  labelSize:        12,
  labelColor:       '#1E3E2B',   // brand/700
  labelColorDisabled: '#9AA0AD', // grey/400

  // Input / placeholder text inside the Row
  // Figma: Playfair Display Medium 14px
  inputFont:        'Playfair Display',
  inputFontWeight:  '500' as const,
  inputSize:        14,
  placeholderColor: '#818898',   // grey/500 — placeholder
  filledColor:      '#1E3E2B',   // brand/700 — filled text
  filledColorDisabled: '#9AA0AD', // grey/400

  // Hint / helper text below field (Inter Regular 12px)
  hintSize:         12,
  hintFont:         'Inter',
  hintColor:        '#7D715E',   // warm brown — normal/focused/filled
  hintColorDisabled:'#9AA0AD',   // grey/400
  hintColorError:   '#D64545',   // error/500

  // Gap between left content label and input row
  leftContentGap:   2,

  // Gap between outer field elements (PlusCircle / LeftContent / Eye)
  iconGap:          8,

  // Gap between inner leading icon and placeholder text in Row
  leadingIconGap:   8,

  // Wrapper gap between field box and hint text
  wrapperGap:       4,
};

// ─── Size tokens — exact from Figma variant scan ──────────────────────────────

const SIZES = {
  Large: {
    fieldHeight:    59,
    paddingH:       10,
    paddingT:       8,
    paddingB:       8,
    leftIconSize:   24,
    leadingIconSize: 20,
    rightIconSize:  20,
  },
  Medium: {
    fieldHeight:    50,
    paddingH:       10,
    paddingT:       6,
    paddingB:       6,
    leftIconSize:   24,
    leadingIconSize: 16,
    rightIconSize:  16,
  },
} as const;

// ─── Types ───────────────────────────────────────────────────────────────────

export type InputSize = 'Large' | 'Medium';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  /** Floating label inside the field (Inter Regular 12px, brand/700) */
  label?: string;
  /** Placeholder text (Playfair Display Medium 14px, grey/500) */
  placeholder?: string;
  /** Helper text shown below the field */
  hint?: string;
  /** Error message — triggers Error state, shown in red below field */
  errorMessage?: string;
  /** Size variant */
  size?: InputSize;
  /** Outer left icon slot (24×24). E.g. a category icon next to the field. */
  leftIcon?: React.ReactNode;
  /**
   * Inner leading icon inside the text row (20×20 Large / 16×16 Medium).
   * Shown to the left of the placeholder text, inside the Left Content.
   */
  leadingIcon?: React.ReactNode;
  /** Right icon slot — typically password show/hide Eye icon */
  rightIcon?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Style override for the outer wrapper */
  containerStyle?: ViewStyle;
}

// ─── Component ───────────────────────────────────────────────────────────────

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  hint,
  errorMessage,
  size = 'Large',
  leftIcon,
  leadingIcon,
  rightIcon,
  disabled = false,
  containerStyle,
  onFocus,
  onBlur,
  value,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasError   = Boolean(errorMessage);
  const tokens     = SIZES[size];
  const hintText   = errorMessage ?? hint;

  // ── Field background
  const fieldBg = disabled
    ? FIGMA.fieldBgDisabled
    : hasError
    ? FIGMA.fieldBgError
    : FIGMA.fieldBg;

  // ── Stroke color
  const strokeColor = disabled
    ? FIGMA.strokeDisabled
    : hasError
    ? FIGMA.strokeError
    : FIGMA.strokeNormal;

  // ── Hint color
  const hintColor = disabled
    ? FIGMA.hintColorDisabled
    : hasError
    ? FIGMA.hintColorError
    : FIGMA.hintColor;

  return (
    <View style={[styles.wrapper, containerStyle]}>

      {/* ── Field box ──────────────────────────────────────────────────────── */}
      <View
        style={[
          styles.fieldBox,
          {
            height:           tokens.fieldHeight,
            borderRadius:     FIGMA.cornerRadius,
            backgroundColor:  fieldBg,
            borderColor:      strokeColor,
            paddingHorizontal: tokens.paddingH,
            paddingTop:       tokens.paddingT,
            paddingBottom:    tokens.paddingB,
          },
        ]}
      >
        {/* Outer left icon (24×24) */}
        {leftIcon && (
          <View style={{ marginRight: FIGMA.iconGap }}>
            {leftIcon}
          </View>
        )}

        {/* Left Content — vertical: floating label on top, input row below */}
        <View style={[styles.leftContent, { gap: FIGMA.leftContentGap }]}>

          {/* Floating label (Inter Regular 12px) */}
          {label ? (
            <Text
              style={[
                styles.floatingLabel,
                {
                  color: disabled
                    ? FIGMA.labelColorDisabled
                    : FIGMA.labelColor,
                },
              ]}
              numberOfLines={1}
            >
              {label}
            </Text>
          ) : null}

          {/* Input row: inner leading icon + TextInput */}
          <View style={styles.inputRow}>
            {leadingIcon && (
              <View style={{ marginRight: FIGMA.leadingIconGap }}>
                {leadingIcon}
              </View>
            )}
            <TextInput
              style={[
                styles.textInput,
                {
                  fontSize:   FIGMA.inputSize,
                  fontFamily: FIGMA.inputFont,
                  fontWeight: FIGMA.inputFontWeight,
                  color:      disabled
                    ? FIGMA.filledColorDisabled
                    : FIGMA.filledColor,
                },
              ]}
              placeholder={placeholder}
              placeholderTextColor={
                disabled ? FIGMA.filledColorDisabled : FIGMA.placeholderColor
              }
              editable={!disabled}
              onFocus={e => { setIsFocused(true);  onFocus?.(e); }}
              onBlur ={e => { setIsFocused(false); onBlur?.(e);  }}
              value={value}
              {...rest}
            />
          </View>
        </View>

        {/* Right icon (Eye, 20×20 Large / 16×16 Medium) */}
        {rightIcon && (
          <View style={{ marginLeft: FIGMA.iconGap }}>
            {rightIcon}
          </View>
        )}
      </View>

      {/* ── Hint / error text (Inter Regular 12px) ─────────────────────────── */}
      {hintText ? (
        <Text
          style={[
            styles.hint,
            { color: hintColor },
          ]}
        >
          {hintText}
        </Text>
      ) : null}
    </View>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  wrapper: {
    gap: FIGMA.wrapperGap,
  },
  fieldBox: {
    flexDirection: 'row',
    alignItems:    'center',
    borderWidth:   FIGMA.strokeWeight,
  },
  leftContent: {
    flex:          1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  floatingLabel: {
    fontSize:      FIGMA.labelSize,
    fontFamily:    FIGMA.labelFont,
    fontWeight:    FIGMA.labelFontWeight,
    lineHeight:    FIGMA.labelSize * 1.55,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems:    'center',
  },
  textInput: {
    flex:            1,
    paddingVertical: 0, // prevent Android extra vertical padding
  },
  hint: {
    fontSize:      FIGMA.hintSize,
    fontFamily:    FIGMA.hintFont,
    fontWeight:    '400',
    lineHeight:    FIGMA.hintSize * 1.55,
  },
});

export default Input;
