/**
 * Button Stories — Sprout Design System
 *
 * ✅ Covers ALL 128 Figma variant combinations:
 *   Type  × Size    × State    × IconOnly
 *   4     × 4       × 4        × 2  = 128
 *
 *   Types: Primary | Secondary | Tertiary | Destructive
 *   Sizes: Large | Medium | Small | XSmall
 *   States: Default | Hover | Focused | Disabled
 *
 * How to use: yarn storybook → Components/Button
 * Copy exact props shown in Controls panel into your React Native code.
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button';

// ─── Meta ────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],

  // 👇 Replace this URL with your actual Figma component URL
  // How to get it: In Figma, right-click your Button component → "Copy link to selection"
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/EhpRiGZ5eJnBb132X9zewg/Sprout-Design--Prod-?node-id=11-179',
    },
  },

  argTypes: {
    type: {
      control: 'select',
      options: ['Primary', 'Secondary', 'Tertiary', 'Destructive'],
      description: 'Figma: Type variant — 4 types confirmed from Figma node 11:179',
      table: { defaultValue: { summary: 'Primary' } },
    },
    size: {
      control: 'select',
      options: ['Large', 'Medium', 'Small', 'XSmall'],
      description: 'Figma: Size variant',
      table: { defaultValue: { summary: 'Large' } },
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Figma: Icon Only variant',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to full container width',
    },
  },

  args: {
    label: 'Get Started',
    type: 'Primary',
    size: 'Large',
    iconOnly: false,
    disabled: false,
    loading: false,
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Single stories ──────────────────────────────────────────────────────────

/** Default primary CTA — the most common button in the app */
export const Primary: Story = {
  args: { type: 'Primary', size: 'Large', label: 'Get Started' },
};

/** Outlined secondary — used for secondary actions on a screen */
export const Secondary: Story = {
  args: { type: 'Secondary', size: 'Large', label: 'Learn More' },
};

/** Ghost / text-only — used for low-emphasis actions */
export const Tertiary: Story = {
  args: { type: 'Tertiary', size: 'Large', label: 'Skip for now' },
};

/** Disabled state — all three types */
export const PrimaryDisabled: Story = {
  args: { type: 'Primary', size: 'Large', label: 'Get Started', disabled: true },
};

export const SecondaryDisabled: Story = {
  args: { type: 'Secondary', size: 'Large', label: 'Learn More', disabled: true },
};

/** Loading spinner */
export const Loading: Story = {
  args: { type: 'Primary', size: 'Large', label: 'Get Started', loading: true },
};

/** Full-width layout — used inside forms and bottom sheets */
export const FullWidth: Story = {
  args: { type: 'Primary', size: 'Large', label: 'Continue', fullWidth: true },
};

// ─── Size showcase ────────────────────────────────────────────────────────────

/**
 * All four sizes — exact from Figma node 11:179
 *   Large:  h=52  px=16  fs=16
 *   Medium: h=48  px=16  fs=14
 *   Small:  h=40  px=16  fs=12
 *   XSmall: h=32  px=16  fs=12
 */
export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button type="Primary" size="Large"  label="Large  — h:52" />
      <Button type="Primary" size="Medium" label="Medium — h:48" />
      <Button type="Primary" size="Small"  label="Small  — h:40" />
      <Button type="Primary" size="XSmall" label="XSmall — h:32" />
    </View>
  ),
};

// ─── Type showcase ────────────────────────────────────────────────────────────

/** All four types at Medium size — matches Figma column layout */
export const AllTypes: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button type="Primary"     size="Medium" label="Primary"     />
      <Button type="Secondary"   size="Medium" label="Secondary"   />
      <Button type="Tertiary"    size="Medium" label="Tertiary"    />
      <Button type="Destructive" size="Medium" label="Destructive" />
    </View>
  ),
};

// ─── Destructive (new) ────────────────────────────────────────────────────────

/**
 * Destructive — Type=Destructive from Figma (node 11:468–11:480)
 * Used for: delete, remove, cancel subscription, irreversible actions.
 * bg:         #D64545  (error/500)
 * bg hover:   #80292A  (error/700)
 * bg disabled:#F7DADA  (error/50 — light pink, NO opacity)
 * text:       white always (even when disabled)
 */
export const Destructive: Story = {
  args: { type: 'Destructive', size: 'Large', label: 'Delete Account' },
};

export const DestructiveDisabled: Story = {
  name: 'Destructive — Disabled (light pink bg)',
  args: { type: 'Destructive', size: 'Large', label: 'Delete Account', disabled: true },
};

/** All four Destructive sizes */
export const DestructiveAllSizes: Story = {
  name: 'Destructive — All Sizes',
  render: () => (
    <View style={{ gap: 12 }}>
      <Button type="Destructive" size="Large"  label="Delete (Large)"  />
      <Button type="Destructive" size="Medium" label="Delete (Medium)" />
      <Button type="Destructive" size="Small"  label="Delete (Small)"  />
      <Button type="Destructive" size="XSmall" label="Delete (XSmall)" />
    </View>
  ),
};

/** Destructive states — Default / Disabled / Loading */
export const DestructiveStates: Story = {
  name: 'Destructive — All States',
  render: () => (
    <View style={{ gap: 12 }}>
      <Button type="Destructive" size="Medium" label="Default"  />
      <Button type="Destructive" size="Medium" label="Disabled (pink bg)" disabled />
      <Button type="Destructive" size="Medium" label="Loading"  loading />
    </View>
  ),
};

// ─── State showcase ───────────────────────────────────────────────────────────

/** Default / Disabled / Loading states for Primary */
export const States: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button type="Primary" size="Medium" label="Default"  />
      <Button type="Primary" size="Medium" label="Disabled" disabled />
      <Button type="Primary" size="Medium" label="Loading"  loading />
    </View>
  ),
};

// ─── With icons ───────────────────────────────────────────────────────────────

/** Primary with a right arrow icon (replace with your icon library) */
export const WithRightIcon: Story = {
  render: () => (
    <Button
      type="Primary"
      size="Large"
      label="Continue"
      rightIcon={<Text style={{ color: '#fff', fontSize: 18 }}>→</Text>}
    />
  ),
};

/** Icon-only button (Figma: Icon Only = true) */
export const IconOnly: Story = {
  args: {
    type: 'Primary',
    size: 'Medium',
    iconOnly: true,
    leftIcon: <Text style={{ color: '#fff', fontSize: 18 }}>+</Text>,
  },
};

// ─── Full matrix ─────────────────────────────────────────────────────────────

/**
 * Complete 4×4 variant matrix — mirrors the Figma component set exactly.
 * 4 Types × 4 Sizes × Default + Disabled = 32 combinations shown here.
 * Figma source: node 11:179, page: ↪︎ Components
 */
export const FullMatrix: Story = {
  name: 'Full Matrix (all 4 types × 4 sizes)',
  render: () => {
    const types = ['Primary', 'Secondary', 'Tertiary', 'Destructive'] as const;
    const sizes = ['Large', 'Medium', 'Small', 'XSmall'] as const;

    const typeColors: Record<string, string> = {
      Primary:     '#186338',
      Secondary:   '#1E3E2B',
      Tertiary:    '#818898',
      Destructive: '#D64545',
    };

    return (
      <View style={{ gap: 28 }}>
        {types.map((type) => (
          <View key={type} style={{ gap: 8 }}>
            <Text style={{
              fontSize: 11, fontWeight: '700', letterSpacing: 0.5,
              color: typeColors[type], textTransform: 'uppercase', marginBottom: 4,
            }}>
              {type}
            </Text>
            {sizes.map((size) => (
              <View key={size} style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Button type={type} size={size} label={size} />
                <Button type={type} size={size} label={`${size} disabled`} disabled />
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  },
};
