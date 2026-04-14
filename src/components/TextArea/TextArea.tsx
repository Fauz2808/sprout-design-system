/**
 * Sprout Design System — TextArea Component
 *
 * ✅ EXACT MATCH to Figma "Text Area" (node: 32:1014)
 * Source page: ↪︎ Components · Figma file: EhpRiGZ5eJnBb132X9zewg
 *
 * Variants confirmed from live Figma scan (4 total):
 *   State: Default | Focused | Filled | Error
 *
 * Key values extracted directly from Figma (not estimates):
 *   - cornerRadius:  10 (confirmed on "Input" inner frame)
 *   - Field bg Default/Focused/Filled: #EAE6DB (secondary/600)
 *   - Field bg Error:                  #F4F1EA (secondary/500 — lighter cream)
 *   - Stroke Default/Focused/Filled:   #E6E7EA (grey/100), weight=1
 *   - Stroke Error:                    #D64545, weight=1
 *   - Padding: all sides 16px
 *   - Field height: 278px (Figma variant total 301px = 278 field + 4 gap + 19 hint)
 *   - Wrapper gap (field→hint): 4px
 *   - Floating label inside field: Playfair Display Medium 12px, #1E3E2B (brand/700)
 *   - Placeholder text: Inter Regular 12px, #818898 (grey/500)
 *   - Filled text color: #1E3E2B (brand/700)
 *   - Hint text: Inter Regular 12px, #7D715E (normal/focused/filled)
 *   - Hint text error: #D64545 (error/500)
 *
 * NOTE: Text Area has no icon slots. It is multiline by design.
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
  fieldBg:      '#EAE6DB',  // secondary/600 — Default/Focused/Filled
  fieldBgError: '#F4F1EA',  // secondary/500 — Error state (lighter cream)

  // Strokes
  strokeNormal: '#E6E7EA',  // grey/100
  strokeError:  '#D64545',  // error/500
  strokeWeight: 1,

  // Corner radius
  cornerRadius: 10,

  // Padding — all four sides equal (confirmed from Figma: t=16 b=16 l=16 r=16)
  padding: 16,

  // Figma field height — used as minHeight; the field grows with content
  minHeight: 278,

  // Wrapper gap between field and hint text
  wrapperGap: 4,

  // Gap between floating label and placeholder inside field
  innerGap: 8,

  // Floating label inside field:
  // Figma: Playfair Display Medium 12px, color brand/700
  labelFont:        'Playfair Display',
  labelFontWeight:  '500' as const,
  labelSize:        12,
  labelColor:       '#1E3E2B',   // brand/700
  labelColorDisabled: '#9AA0AD', // grey/400

  // Placeholder / input text:
  // Figma: Inter Regular 12px
  inputFont:        'Inter',
  inputFontWeight:  '400' as const,
  inputSize:        12,
  placeholderColor: '#818898',    // grey/500
  filledColor:      '#1E3E2B',    // brand/700
  filledColorDisabled: '#9AA0AD', // grey/400

  // Hint / helper text (Inter Regular 12px)
  hintSize:          12,
  hintFont:          'Inter',
  hintColor:         '#7D715E',   // warm brown
  hintColorDisabled: '#9AA0AD',
  hintColorError:    '#D64545',
};

// ─── Types ───────────────────────────────────────────────────────────────────

export type TextAreaState = 'Default' | 'Focused' | 'Filled' | 'Error';

export interface TextAreaProps extends Omit<TextInputProps, 'style' | 'multiline'> {
  /** Floating label inside the text area (Playfair Display Medium 12px) */
  label?: string;
  /** Placeholder text (Inter Regular 12px, grey/500) */
  placeholder?: string;
  /** Helper text shown below the field */
  hint?: string;
  /** Error message — triggers Error visual state, shown in red */
  errorMessage?: string;
  /** Minimum number of visible lines (defaults to fill Figma minHeight) */
  numberOfLines?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Style override for the outer wrapper */
  containerStyle?: ViewStyle;
}

// ─── Component ───────────────────────────────────────────────────────────────

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  hint,
  errorMessage,
  numberOfLines = 8,
  disabled = false,
  containerStyle,
  onFocus,
  onBlur,
  value,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasError = Boolean(errorMessage);
  const hintText = errorMessage ?? hint;

  // ── Field background
  const fieldBg = hasError ? FIGMA.fieldBgError : FIGMA.fieldBg;

  // ── Stroke color
  const strokeColor = hasError ? FIGMA.strokeError : FIGMA.strokeNormal;

  // ── Hint color
  const hintColor = disabled
    ? FIGMA.hintColorDisabled
    : hasError
    ? FIGMA.hintColorError
    : FIGMA.hintColor;

  return (
    <View style={[styles.wrapper, containerStyle]}>

      {/* ── Text Area field box ─────────────────────────────────────────────── */}
      <View
        style={[
          styles.fieldBox,
          {
            minHeight:        FIGMA.minHeight,
            borderRadius:     FIGMA.cornerRadius,
            backgroundColor:  fieldBg,
            borderColor:      strokeColor,
            padding:          FIGMA.padding,
          },
          disabled && styles.fieldDisabled,
        ]}
      >
        {/* Floating label (Playfair Display Medium 12px — confirmed from Figma) */}
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

        {/* Multiline TextInput */}
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
              marginTop: label ? FIGMA.innerGap : 0,
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={
            disabled ? FIGMA.filledColorDisabled : FIGMA.placeholderColor
          }
          multiline
          numberOfLines={numberOfLines}
          textAlignVertical="top"
          editable={!disabled}
          onFocus={e => { setIsFocused(true);  onFocus?.(e); }}
          onBlur ={e => { setIsFocused(false); onBlur?.(e);  }}
          value={value}
          {...rest}
        />
      </View>

      {/* ── Hint / error text ──────────────────────────────────────────────── */}
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
    borderWidth: FIGMA.strokeWeight,
  },
  fieldDisabled: {
    opacity: 0.55,
  },
  floatingLabel: {
    fontSize:      FIGMA.labelSize,
    fontFamily:    FIGMA.labelFont,
    fontWeight:    FIGMA.labelFontWeight,
    lineHeight:    FIGMA.labelSize * 1.4,
  },
  textInput: {
    flex:            1,
    padding:         0,  // clear default TextInput padding
  },
  hint: {
    fontSize:   FIGMA.hintSize,
    fontFamily: FIGMA.hintFont,
    fontWeight: '400',
    lineHeight: FIGMA.hintSize * 1.55,
  },
});

export default TextArea;
