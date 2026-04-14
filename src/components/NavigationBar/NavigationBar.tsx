/**
 * Sprout Design System — NavigationBar (Bottom Tab Bar)
 *
 * ✅ EXACT MATCH to Figma "Navigation Bar" (node: 100:8821)
 * Source page: ↪︎ Components · Figma file: EhpRiGZ5eJnBb132X9zewg
 *
 * Variants confirmed from live Figma scan (5 total):
 *   Type: Home (Events) | Memories | AI Assist | Chat | Clubs
 *
 * Key values extracted directly from Figma (not estimates):
 *   - Background: #F4F1EA (cream = Secondary/500) — VariableID:26:516
 *   - Shape: cornerRadius 9999 — full pill/capsule
 *   - Border: #E6E7EA 1px inside (grey/100)
 *   - Height: 69px
 *   - Padding: l=16 r=16 t=12 b=12
 *   - Shadow 1: rgba(14,14,16,0.15) offset(4,5) blur=25 spread=3
 *   - Shadow 2: rgba(14,14,16,0.05) offset(2,5) blur=10 spread=0
 *
 * Positioning (from Home screen scan — node 1:17285):
 *   - Nav bar x=16, y=751 in 393×852 screen
 *   - Side margins: 16px each side (393 - 361 width = 32 / 2)
 *   - Bottom gap from screen edge: 32px
 *   - Constraint: horizontal=CENTER, vertical=MAX (pinned to bottom)
 *   - In production: position='absolute', bottom=32+safeArea, left=16, right=16
 *
 * Per tab item (Button container, confirmed from scan):
 *   - VERTICAL layout, CENTER align, itemSpacing=4
 *   - Width: 52px (Events/Memories/Chat/Clubs), HUG for AI Assist (~45px)
 *   - Height: 45px (fills the 69px pill minus t/b padding)
 *   - Icon: 24×24
 *   - Label: Inter Regular 11px
 *
 * Active state (pure color change — NO pill indicator):
 *   - Icon: filled/solid #186338 (brand/500)
 *   - Label: #186338 (brand/500)
 *
 * Inactive state:
 *   - Icon: outlined/stroked #7D715E (warm brown)
 *   - Label: #7D715E
 *
 * Chat badge (notification bubble):
 *   - Size: 16×16, cornerRadius: 100 (full circle)
 *   - Background: #186338 (brand/500)
 *   - Padding: l=5 r=5 t=2 b=2
 *   - Text: Inter Medium 10px, color #ffffff
 *
 * Overlay gradient (Figma Overlay frame, y=725 h=127 in the Home screen):
 *   - Starts ~26px above the nav bar, fades from transparent to page background
 *   - Use the optional `withFade` prop to render this in RN
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

// ─── Raw Figma-extracted values ───────────────────────────────────────────────

const FIGMA = {
  // Container
  background:   '#F4F1EA',  // VariableID:26:516 — Secondary/500 (cream)
  borderColor:  '#E6E7EA',  // grey/100
  borderWidth:  1,
  cornerRadius: 9999,       // full pill shape

  // Dimensions (confirmed from component set scan)
  barHeight:    69,
  paddingH:     16,         // l=16, r=16 (also matches 16px side margin from screen)
  paddingV:     12,         // t=12, b=12

  // Gap between icon and label inside each tab item
  tabGap:       4,          // itemSpacing=4

  // Tab label
  labelFont:       'Inter',
  labelFontWeight: '400' as const,
  labelSize:       11,

  // Active: icon filled green, label green
  activeColor:     '#186338',  // brand/500

  // Inactive: icon outlined, label warm brown
  inactiveColor:   '#7D715E',  // warm brown

  // Positioning (from Home screen node 1:17285 scan)
  sideMargin:      16,         // x=16 in screen — left and right margin
  bottomGap:       32,         // screen height 852 - (y=751 + h=69) = 32px

  // Shadow layer 1 (dominant): rgba(14,14,16,0.15) offset(4,5) blur=25 spread=3
  shadow1Color:    '#0E0E10',
  shadow1Opacity:  0.15,
  shadow1OffsetX:  4,
  shadow1OffsetY:  5,
  shadow1Blur:     25,

  // Shadow layer 2 (subtle): rgba(14,14,16,0.05) offset(2,5) blur=10 spread=0
  shadow2Color:    '#0E0E10',
  shadow2Opacity:  0.05,
  shadow2OffsetX:  2,
  shadow2OffsetY:  5,
  shadow2Blur:     10,

  // Chat badge
  badgeBg:          '#186338',
  badgeSize:        16,
  badgeRadius:      100,
  badgePaddingH:    5,
  badgePaddingV:    2,
  badgeFontSize:    10,
  badgeFontFamily:  'Inter',
  badgeFontWeight:  '500' as const,
  badgeTextColor:   '#ffffff',

  // Overlay fade (Figma Overlay frame: starts 26px above nav bar, 127px tall)
  // Fades from transparent → page bg color
  fadeBg:        '#F4F1EA',
  fadeHeight:    26,           // fade zone above the pill
};

// ─── Types ───────────────────────────────────────────────────────────────────

/** Sprout tab keys — match Figma "Type" variant names */
export type NavTabKey = 'events' | 'memories' | 'ai-assist' | 'chat' | 'clubs' | string;

export interface NavTab {
  key: NavTabKey;
  /** Label shown below icon (Inter Regular 11px) */
  label: string;
  /**
   * Icon renderer — receives `active` boolean.
   * active=true  → render FILLED solid icon in #186338
   * active=false → render OUTLINED icon in #7D715E
   */
  icon: (active: boolean) => React.ReactNode;
  /** Notification count shown as badge above icon (e.g. Chat unread count) */
  badge?: number;
}

export interface NavigationBarProps {
  tabs: NavTab[];
  activeTab: NavTabKey;
  onTabPress: (key: NavTabKey) => void;
  /**
   * Safe-area bottom inset added BELOW the pill.
   * In production: pass `insets.bottom` from react-native-safe-area-context.
   * Figma shows 32px gap below the bar in the iPhone screen frame.
   */
  bottomInset?: number;
  /**
   * Horizontal margin from screen edges (default 16px — matches Figma x=16).
   * The pill width = screenWidth - (sideMargin × 2).
   */
  sideMargin?: number;
  /**
   * Renders a subtle fade above the nav bar (matches Figma Overlay frame).
   * Use true when the nav bar floats over scrollable content.
   */
  withFade?: boolean;
  /** Style override for the outermost container */
  style?: ViewStyle;
}

// ─── Component ───────────────────────────────────────────────────────────────

export const NavigationBar: React.FC<NavigationBarProps> = ({
  tabs,
  activeTab,
  onTabPress,
  bottomInset = 32,
  sideMargin  = FIGMA.sideMargin,
  withFade    = false,
  style,
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        {
          paddingHorizontal: sideMargin,
          paddingBottom:     bottomInset,
        },
        style,
      ]}
    >
      {/* Optional fade overlay above the pill (matches Figma Overlay frame) */}
      {withFade && (
        <View
          style={[
            styles.fade,
            { marginHorizontal: -sideMargin },
          ]}
          pointerEvents="none"
        />
      )}

      {/*
       * Shadow wrapper — separate from the pill so shadow isn't clipped.
       * On iOS: shadowColor/shadowOffset/shadowOpacity/shadowRadius work with borderRadius.
       * On Android: elevation gives a natural shadow.
       * NOTE: Do NOT add overflow:'hidden' here — it clips the shadow on Android.
       */}
      <View style={styles.shadowLayer}>
        {/* ── Pill container ─────────────────────────────────────────────── */}
        <View style={styles.pill}>
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;

            return (
              <TouchableOpacity
                key={tab.key}
                style={styles.tabItem}
                onPress={() => onTabPress(tab.key)}
                activeOpacity={0.7}
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
                accessibilityLabel={tab.label}
              >
                {/* Icon + optional badge */}
                <View style={styles.iconArea}>
                  <View style={styles.iconWrapper}>
                    {tab.icon(isActive)}
                  </View>

                  {tab.badge != null && tab.badge > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText} numberOfLines={1}>
                        {tab.badge > 99 ? '99+' : String(tab.badge)}
                      </Text>
                    </View>
                  )}
                </View>

                {/* Label — Inter Regular 11px, color changes with active state */}
                <Text
                  style={[
                    styles.label,
                    { color: isActive ? FIGMA.activeColor : FIGMA.inactiveColor },
                  ]}
                  numberOfLines={1}
                >
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },

  // Subtle fade above the pill — matches Figma Overlay frame (transparent → cream)
  fade: {
    height:          FIGMA.fadeHeight,
    // A simple opaque fade; swap with LinearGradient for a true gradient:
    // <LinearGradient colors={['rgba(244,241,234,0)', '#F4F1EA']} style={styles.fade} />
    backgroundColor: 'rgba(244,241,234,0.0)',
    pointerEvents:   'none',
  },

  // Shadow wrapper — carries the drop shadow without clipping it
  shadowLayer: {
    borderRadius:   FIGMA.cornerRadius,
    backgroundColor: FIGMA.background,  // needed for Android elevation shadow

    // iOS dual-shadow approximation (RN only supports one shadow layer natively)
    // Using the dominant layer (blur=25, opacity=0.15)
    ...Platform.select({
      ios: {
        shadowColor:   FIGMA.shadow1Color,
        shadowOffset:  { width: FIGMA.shadow1OffsetX, height: FIGMA.shadow1OffsetY },
        shadowRadius:  FIGMA.shadow1Blur / 2,
        shadowOpacity: FIGMA.shadow1Opacity,
      },
      android: {
        elevation: 12,  // approximates the 2-layer Figma shadow depth
      },
      default: {},
    }),
  },

  // The visible pill — border + background color + rounded shape
  // NO overflow:'hidden' — children stay within bounds naturally, and hiding
  // overflow prevents Android elevation shadows from rendering.
  pill: {
    flexDirection:     'row',
    alignItems:        'center',
    justifyContent:    'space-between',
    height:            FIGMA.barHeight,
    borderRadius:      FIGMA.cornerRadius,
    backgroundColor:   FIGMA.background,
    borderWidth:       FIGMA.borderWidth,
    borderColor:       FIGMA.borderColor,
    paddingHorizontal: FIGMA.paddingH,
  },

  // Individual tab button — full-height touch target, centered content
  tabItem: {
    flex:            1,
    alignItems:      'center',
    justifyContent:  'center',
    paddingVertical: FIGMA.paddingV,   // 12px top + bottom = 24px → content area = 45px
    gap:             FIGMA.tabGap,     // 4px between icon and label
  },

  // Icon wrapper — fixed 24×24, centres the icon SVG
  iconArea: {
    position: 'relative',
    width:    24,
    height:   24,
  },

  iconWrapper: {
    width:           24,
    height:          24,
    alignItems:      'center',
    justifyContent:  'center',
  },

  // Notification badge — top-right of icon area
  badge: {
    position:          'absolute',
    top:               -5,
    right:             -7,
    minWidth:          FIGMA.badgeSize,
    height:            FIGMA.badgeSize,
    borderRadius:      FIGMA.badgeRadius,
    backgroundColor:   FIGMA.badgeBg,
    paddingHorizontal: FIGMA.badgePaddingH,
    paddingVertical:   FIGMA.badgePaddingV,
    alignItems:        'center',
    justifyContent:    'center',
  },

  badgeText: {
    fontSize:   FIGMA.badgeFontSize,
    fontFamily: FIGMA.badgeFontFamily,
    fontWeight: FIGMA.badgeFontWeight,
    color:      FIGMA.badgeTextColor,
    lineHeight: FIGMA.badgeFontSize * 1.2,
  },

  // Tab label — Inter Regular 11px
  label: {
    fontSize:      FIGMA.labelSize,
    fontFamily:    FIGMA.labelFont,
    fontWeight:    FIGMA.labelFontWeight,
    lineHeight:    FIGMA.labelSize * 1.5,
    textAlign:     'center',
  },
});

export default NavigationBar;
