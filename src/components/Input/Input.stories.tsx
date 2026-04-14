/**
 * Input Stories — Sprout Design System
 *
 * ✅ Covers all 10 Figma variant combinations:
 *   State × Size = 5 × 2 = 10
 *   States: Normal | Focused | Filled | Disable | Error
 *   Sizes:  Large | Medium
 *
 * Figma source: node 33:8502, page: ↪︎ Components
 * File: EhpRiGZ5eJnBb132X9zewg
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import {
  CubeIcon,
  EyeIcon,
  PlusCircleIcon,
  SearchIcon,
} from '../Icons';
import { Input } from './Input';

// ─── Meta ────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'select',
      options: ['Large', 'Medium'],
      description: 'Figma: Size variant — Large (field h=59) | Medium (field h=50)',
      table: { defaultValue: { summary: 'Large' } },
    },
    label: {
      control: 'text',
      description: 'Floating label inside field — Inter Regular 12px, brand/700 #1E3E2B',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text — Playfair Display Medium 14px, grey/500 #818898',
    },
    hint: {
      control: 'text',
      description: 'Helper text below field — Inter Regular 12px, warm brown #7D715E',
    },
    errorMessage: {
      control: 'text',
      description: 'Error text — triggers Error state: red border + red hint',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled — grey bg #CDCFD6, muted text, not editable',
      table: { defaultValue: { summary: 'false' } },
    },
  },

  args: {
    label:       'Email address',
    placeholder: 'Placeholder',
    hint:        'This is a hint text to help user',
    size:        'Large',
    disabled:    false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ─── Single stories — one per Figma state ────────────────────────────────────

/** State=Normal — empty field, no focus */
export const Normal: Story = {
  args: {
    label:       'Email address',
    placeholder: 'Placeholder',
    hint:        'This is a hint text to help user',
    size:        'Large',
  },
};

/**
 * State=Focused — user has tapped the field.
 * Figma shows same bg/border as Normal — only keyboard is active.
 */
export const Focused: Story = {
  args: {
    label:       'Email address',
    placeholder: 'Placeholder',
    hint:        'This is a hint text to help user',
    size:        'Large',
    autoFocus:   true,
  },
};

/** State=Filled — user has typed a value */
export const Filled: Story = {
  args: {
    label:       'Email address',
    placeholder: 'Placeholder',
    hint:        'This is a hint text to help user',
    value:       'fauzan@sprout.com',
    size:        'Large',
  },
};

/**
 * State=Disable — field bg switches to #CDCFD6 (grey/200),
 * hint text turns to #9AA0AD (grey/400).
 */
export const Disabled: Story = {
  args: {
    label:       'Email address',
    placeholder: 'Placeholder',
    hint:        'This is a hint text to help user',
    size:        'Large',
    disabled:    true,
  },
};

/**
 * State=Error — field bg switches to #F4F1EA (lighter cream),
 * border becomes #D64545 (error/500, red), hint text becomes red.
 */
export const Error: Story = {
  args: {
    label:        'Email address',
    placeholder:  'Placeholder',
    errorMessage: 'This is a hint text to help user',
    value:        'invalid-email',
    size:         'Large',
  },
};

// ─── Size showcase ────────────────────────────────────────────────────────────

/**
 * Both sizes — Large (field h=59) and Medium (field h=50).
 * Padding: Large t/b=8, Medium t/b=6. Both use paddingH=10.
 */
export const AllSizes: Story = {
  name: 'All Sizes (Large h=59 / Medium h=50)',
  render: () => (
    <View style={{ gap: 16 }}>
      <Input
        label="Large field"
        placeholder="Placeholder"
        hint="Field height: 59px · padding t=8 b=8 h=10"
        size="Large"
      />
      <Input
        label="Medium field"
        placeholder="Placeholder"
        hint="Field height: 50px · padding t=6 b=6 h=10"
        size="Medium"
      />
    </View>
  ),
};

// ─── All 5 states in a single view ───────────────────────────────────────────

/**
 * All 5 states — mirrors the Figma component set column layout.
 * Normal → Focused → Filled → Disabled → Error
 */
export const AllStates: Story = {
  name: 'All States (5 variants)',
  render: () => (
    <View style={{ gap: 16 }}>
      <Input
        label="Normal"
        placeholder="Placeholder"
        hint="This is a hint text to help user"
        size="Large"
      />
      <Input
        label="Focused (autoFocus)"
        placeholder="Placeholder"
        hint="This is a hint text to help user"
        size="Large"
        autoFocus
      />
      <Input
        label="Filled"
        placeholder="Placeholder"
        hint="This is a hint text to help user"
        value="fauzan@sprout.com"
        size="Large"
      />
      <Input
        label="Disabled"
        placeholder="Placeholder"
        hint="This is a hint text to help user"
        size="Large"
        disabled
      />
      <Input
        label="Error"
        placeholder="Placeholder"
        errorMessage="This is a hint text to help user"
        value="invalid@"
        size="Large"
      />
    </View>
  ),
};

// ─── With icons ───────────────────────────────────────────────────────────────

/**
 * Full icon setup — matches Input Form 2 (node 33:8502):
 *   leftIcon:    outer left  (24×24 — PlusCircle/SearchIcon slot)
 *   leadingIcon: inner small (20×20 — Cube slot, inside the text row)
 *   rightIcon:   outer right (20×20 — Eye slot)
 */
export const WithIcons: Story = {
  name: 'With Icons (left + leading + right)',
  render: () => (
    <View style={{ gap: 16 }}>
      <Input
        label="Username"
        placeholder="Placeholder"
        hint="This is a hint text to help user"
        size="Large"
        leftIcon={<SearchIcon size={24} />}
        leadingIcon={<CubeIcon size={20} />}
        rightIcon={<EyeIcon size={20} />}
      />
      <Input
        label="Password"
        placeholder="Placeholder"
        hint="This is a hint text to help user"
        size="Medium"
        leadingIcon={<CubeIcon size={16} />}
        rightIcon={<EyeIcon size={16} />}
        secureTextEntry
      />
    </View>
  ),
};

/** Right icon only — typical password field with Eye reveal */
export const WithRightIcon: Story = {
  name: 'Right icon only (password)',
  args: {
    label:           'Password',
    placeholder:     'Enter password',
    hint:            'Must be at least 8 characters',
    size:            'Large',
    rightIcon:       <EyeIcon size={20} />,
    secureTextEntry: true,
  },
};

/** Error state with icons */
export const ErrorWithIcons: Story = {
  name: 'Error + icons',
  args: {
    label:        'Email address',
    placeholder:  'Placeholder',
    errorMessage: 'This is a hint text to help user',
    value:        'invalid@',
    size:         'Large',
    leadingIcon:  <CubeIcon size={20} />,
    rightIcon:    <EyeIcon size={20} />,
  },
};

// ─── Full 2×5 matrix ─────────────────────────────────────────────────────────

/**
 * Complete 2×5 variant matrix — mirrors Figma exactly.
 * 2 Sizes × 5 States = 10 combinations shown side by side.
 * Figma source: node 33:8502
 */
export const FullMatrix: Story = {
  name: 'Full Matrix (2 sizes × 5 states)',
  render: () => {
    const states = [
      { label: 'Normal',   props: {} },
      { label: 'Filled',   props: { value: 'fauzan@sprout.com' } },
      { label: 'Disabled', props: { disabled: true } },
      { label: 'Error',    props: { errorMessage: 'This is a hint text to help user', value: 'bad@' } },
    ];

    return (
      <View style={{ gap: 28 }}>
        {(['Large', 'Medium'] as const).map(size => (
          <View key={size} style={{ gap: 8 }}>
            <Text style={{
              fontSize: 11, fontWeight: '700', letterSpacing: 0.5,
              color: '#186338', textTransform: 'uppercase', marginBottom: 4,
            }}>
              {size} (h={size === 'Large' ? 59 : 50})
            </Text>
            {states.map(state => (
              <Input
                key={state.label}
                size={size}
                label={state.label}
                placeholder="Placeholder"
                hint="This is a hint text to help user"
                {...(state.props as any)}
              />
            ))}
          </View>
        ))}
      </View>
    );
  },
};
