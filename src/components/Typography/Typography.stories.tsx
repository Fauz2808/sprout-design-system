/**
 * Typography Stories — Sprout Design System
 * Complete type scale from Figma text styles.
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1','h2','h3','h4','h5','h6','p1','p2','p3','s1','s2','s3','c1','c2','c3'],
    },
    color: { control: 'color' },
    center: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    variant: 'p2',
    children: 'Sprout helps families grow together.',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {};

/** Complete Heading scale — Playfair Display */
export const Headings: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Typography variant="h1">H1 · 30px · Playfair Display</Typography>
      <Typography variant="h2">H2 · 24px · Playfair Display</Typography>
      <Typography variant="h3">H3 · 18px · Playfair Display</Typography>
      <Typography variant="h4">H4 · 16px · Playfair Display</Typography>
      <Typography variant="h5">H5 · 14px · Playfair Display</Typography>
      <Typography variant="h6">H6 · 12px · Playfair Display</Typography>
    </View>
  ),
};

/** Complete Body scale — Inter Regular */
export const Paragraphs: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Typography variant="p1">P1 · 16px · Inter Regular — Body large, used for primary reading content.</Typography>
      <Typography variant="p2">P2 · 14px · Inter Regular — Default body text, used everywhere.</Typography>
      <Typography variant="p3">P3 · 12px · Inter Regular — Small body, captions and secondary content.</Typography>
    </View>
  ),
};

/** Subheadings — Inter Medium */
export const Subheadings: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Typography variant="s1">S1 · 16px · Inter Medium</Typography>
      <Typography variant="s2">S2 · 14px · Inter Medium</Typography>
      <Typography variant="s3">S3 · 12px · Inter Medium</Typography>
    </View>
  ),
};

/** Captions — 10px */
export const Captions: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Typography variant="c1">C1 · 10px · Inter SemiBold — LABELS, TAGS, BADGES</Typography>
      <Typography variant="c2">C2 · 10px · Inter Medium — Secondary caption</Typography>
      <Typography variant="c3">C3 · 10px · Inter Regular — Tertiary caption</Typography>
    </View>
  ),
};

/** Full type system at a glance */
export const FullTypeScale: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      {/* Headings */}
      <View style={{ gap: 8 }}>
        <Typography variant="c1" color="#818898">HEADINGS — PLAYFAIR DISPLAY</Typography>
        <Typography variant="h1">H1 — Growing together</Typography>
        <Typography variant="h2">H2 — Your family journey</Typography>
        <Typography variant="h3">H3 — Today's activities</Typography>
      </View>

      {/* Body */}
      <View style={{ gap: 8 }}>
        <Typography variant="c1" color="#818898">BODY — INTER REGULAR</Typography>
        <Typography variant="p1">P1 — Sprout helps you track your children's milestones and stay connected as a family.</Typography>
        <Typography variant="p2">P2 — Add your children's profiles and start logging memories that matter.</Typography>
        <Typography variant="p3">P3 — Last updated 2 minutes ago · 3 family members</Typography>
      </View>

      {/* Subheads */}
      <View style={{ gap: 6 }}>
        <Typography variant="c1" color="#818898">SUBHEADS — INTER MEDIUM</Typography>
        <Typography variant="s1">S1 — Section title</Typography>
        <Typography variant="s2">S2 — Card title</Typography>
        <Typography variant="s3">S3 — List item label</Typography>
      </View>

      {/* Captions */}
      <View style={{ gap: 4 }}>
        <Typography variant="c1" color="#818898">CAPTIONS — INTER 10px</Typography>
        <Typography variant="c1">C1 — ACTIVE LABEL</Typography>
        <Typography variant="c2">C2 — Supporting caption</Typography>
        <Typography variant="c3">C3 — Minor detail</Typography>
      </View>
    </View>
  ),
};
