/**
 * TextArea Stories — Sprout Design System
 *
 * ✅ Covers all 4 Figma variant combinations:
 *   States: Default | Focused | Filled | Error
 *
 * Figma source: node 32:1014, page: ↪︎ Components
 * File: EhpRiGZ5eJnBb132X9zewg
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { TextArea } from './TextArea';

// ─── Meta ────────────────────────────────────────────────────────────────────

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
      description: 'Floating label inside the field — Playfair Display Medium 12px, brand/700 #1E3E2B',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text — Inter Regular 12px, grey/500 #818898',
    },
    hint: {
      control: 'text',
      description: 'Helper text below field — Inter Regular 12px, warm brown #7D715E',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message — triggers Error state: red border + red hint text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { defaultValue: { summary: 'false' } },
    },
    numberOfLines: {
      control: 'number',
      description: 'Minimum number of visible lines',
      table: { defaultValue: { summary: '8' } },
    },
  },

  args: {
    label:         'Message',
    placeholder:   'Placeholder',
    hint:          'This is a hint text to help user',
    disabled:      false,
    numberOfLines: 8,
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// ─── Single stories — one per Figma state ────────────────────────────────────

/**
 * State=Default — empty text area, no focus.
 * Figma: bg #EAE6DB, border #E6E7EA (grey/100)
 */
export const Default: Story = {
  args: {
    label:       'Message',
    placeholder: 'Placeholder',
    hint:        'This is a hint text to help user',
  },
};

/**
 * State=Focused — user has tapped the text area.
 * Figma: same bg/border as Default — only cursor is active.
 */
export const Focused: Story = {
  args: {
    label:       'Message',
    placeholder: 'Placeholder',
    hint:        'This is a hint text to help user',
    autoFocus:   true,
  },
};

/** State=Filled — user has typed content */
export const Filled: Story = {
  args: {
    label:       'Message',
    placeholder: 'Placeholder',
    hint:        'This is a hint text to help user',
    value:       "Hi! I'm interested in joining the Sprout community and would love to know more about the clubs available. Looking forward to hearing from you!",
  },
};

/**
 * State=Error — bg switches to #F4F1EA (lighter cream),
 * border becomes #D64545 (error/500, red), hint becomes red.
 */
export const Error: Story = {
  args: {
    label:        'Message',
    placeholder:  'Placeholder',
    errorMessage: 'This is a hint text to help user',
    value:        'Too short.',
  },
};

// ─── All 4 states in one view ─────────────────────────────────────────────────

/**
 * All 4 states — mirrors the Figma component set layout.
 * Default → Focused → Filled → Error
 */
export const AllStates: Story = {
  name: 'All States (4 variants)',
  render: () => (
    <View style={{ gap: 24 }}>
      <TextArea
        label="Default"
        placeholder="Placeholder"
        hint="This is a hint text to help user"
      />
      <TextArea
        label="Focused (autoFocus)"
        placeholder="Placeholder"
        hint="This is a hint text to help user"
        autoFocus
      />
      <TextArea
        label="Filled"
        placeholder="Placeholder"
        hint="This is a hint text to help user"
        value="Hi! I'm interested in joining the Sprout community and would love to know more about the clubs available."
      />
      <TextArea
        label="Error"
        placeholder="Placeholder"
        errorMessage="This is a hint text to help user"
        value="Too short."
      />
    </View>
  ),
};

// ─── Fewer lines ─────────────────────────────────────────────────────────────

/** Compact variant — fewer lines for shorter messages */
export const FewLines: Story = {
  name: 'Compact (numberOfLines=4)',
  args: {
    label:         'Short bio',
    placeholder:   'Tell us a little about yourself…',
    hint:          'Max 150 characters',
    numberOfLines: 4,
  },
};

// ─── Disabled ────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  args: {
    label:       'Message',
    placeholder: 'Placeholder',
    hint:        'This is a hint text to help user',
    disabled:    true,
    value:       'This field is not editable right now.',
  },
};

// ─── No label ────────────────────────────────────────────────────────────────

/** Text area without floating label — just placeholder + hint */
export const NoLabel: Story = {
  name: 'No floating label',
  args: {
    placeholder: 'Add a comment…',
    hint:        'This is a hint text to help user',
  },
};
