/**
 * Badge Stories — Sprout Design System
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['Dot', 'Count', 'Label'],
    },
    color: {
      control: 'select',
      options: ['Brand', 'Success', 'Error', 'Warning', 'Info', 'Neutral'],
    },
    size: {
      control: 'select',
      options: ['Large', 'Medium', 'Small'],
    },
    label: { control: 'text' },
    maxCount: { control: 'number' },
  },

  args: {
    variant: 'Count',
    color: 'Brand',
    size: 'Medium',
    label: 3,
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

/** Dot indicators — status presence */
export const Dots: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Badge variant="Dot" color="Brand"   size="Large"  />
      <Badge variant="Dot" color="Success" size="Large"  />
      <Badge variant="Dot" color="Error"   size="Large"  />
      <Badge variant="Dot" color="Warning" size="Medium" />
      <Badge variant="Dot" color="Info"    size="Small"  />
      <Badge variant="Dot" color="Neutral" size="Small"  />
    </View>
  ),
};

/** Count badges — notification counts */
export const Counts: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Badge variant="Count" color="Brand"   label={1}   />
      <Badge variant="Count" color="Brand"   label={9}   />
      <Badge variant="Count" color="Brand"   label={99}  />
      <Badge variant="Count" color="Brand"   label={100} maxCount={99} />
      <Badge variant="Count" color="Error"   label={3}   />
      <Badge variant="Count" color="Success" label={12}  />
    </View>
  ),
};

/** Label badges — status tags */
export const Labels: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
      <Badge variant="Label" color="Brand"   label="Active"    />
      <Badge variant="Label" color="Success" label="Complete"  />
      <Badge variant="Label" color="Error"   label="Overdue"   />
      <Badge variant="Label" color="Warning" label="Pending"   />
      <Badge variant="Label" color="Info"    label="New"       />
      <Badge variant="Label" color="Neutral" label="Archived"  />
    </View>
  ),
};

/** All colors */
export const AllColors: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {(['Brand','Success','Error','Warning','Info','Neutral'] as const).map((c) => (
        <View key={c} style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Badge variant="Dot"   color={c} size="Large" />
          <Badge variant="Count" color={c} label={5}    />
          <Badge variant="Label" color={c} label={c}    />
          <Text style={{ color: '#818898', fontSize: 12 }}>{c}</Text>
        </View>
      ))}
    </View>
  ),
};

/** Sizes */
export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      {(['Large','Medium','Small'] as const).map((s) => (
        <View key={s} style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Badge variant="Count" color="Brand" size={s} label={5}    />
          <Badge variant="Label" color="Brand" size={s} label={s}    />
          <Badge variant="Dot"   color="Brand" size={s}              />
          <Text style={{ color: '#818898', fontSize: 12 }}>{s}</Text>
        </View>
      ))}
    </View>
  ),
};
