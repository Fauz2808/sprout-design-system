/**
 * Icons Stories — Sprout Design System
 *
 * All 1530 Figma icons are Phosphor Icons (phosphor-react-native).
 * This story renders a searchable gallery — no need to import each icon individually.
 *
 * Figma source: ↪︎ Icon page · File: EhpRiGZ5eJnBb132X9zewg
 *
 * Phosphor weights available:
 *   thin | light | regular | bold | fill | duotone
 */

import type { Meta, StoryObj } from '@storybook/react';
import * as PhosphorIcons from 'phosphor-react-native';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Filter to only icon components (functions), exclude utility exports
const ALL_ICON_NAMES = (Object.keys(PhosphorIcons) as string[]).filter(
  key => typeof (PhosphorIcons as Record<string, unknown>)[key] === 'function'
);

type PhosphorWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

const WEIGHTS: PhosphorWeight[] = ['regular', 'fill', 'light', 'bold', 'thin', 'duotone'];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Foundation/Icons',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '**1530 icons from the Phosphor icon library** — the exact set used in Figma.',
          '',
          'Install: `yarn add phosphor-react-native`',
          '',
          'Usage:',
          '```tsx',
          "import { Compass } from 'phosphor-react-native';",
          '<Compass size={24} weight="regular" color="#7D715E" />',
          '<Compass size={24} weight="fill"    color="#186338" />',
          '```',
          '',
          'Or use the Sprout wrappers (pre-configured colours):',
          '```tsx',
          "import { EventsIcon } from '../Icons';",
          '<EventsIcon active={true} size={24} />',
          '```',
        ].join('\n'),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// ─── Searchable full gallery ───────────────────────────────────────────────────

/**
 * Search across all 1530 icons.
 * Try: "chat", "arrow", "heart", "calendar", "user"
 */
export const AllIcons: Story = {
  name: 'All Icons (searchable)',
  render: () => {
    const [search, setSearch]   = useState('');
    const [weight, setWeight]   = useState<PhosphorWeight>('regular');
    const [size,   setSize]     = useState(24);
    const [copied, setCopied]   = useState('');

    const filtered = ALL_ICON_NAMES.filter(n =>
      n.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <View style={{ flex: 1, backgroundColor: '#F4F1EA' }}>

        {/* ── Search + controls ── */}
        <View style={{ padding: 12, gap: 8, backgroundColor: '#F4F1EA', borderBottomWidth: 1, borderBottomColor: '#E6E7EA' }}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder={`Search ${ALL_ICON_NAMES.length} icons…`}
            placeholderTextColor="#9AA0AD"
            style={{
              backgroundColor: '#EAE6DB',
              borderRadius:    10,
              paddingHorizontal: 12,
              paddingVertical:   10,
              fontFamily:      'Inter',
              fontSize:        14,
              color:           '#1E3E2B',
            }}
          />

          {/* Weight selector */}
          <View style={{ flexDirection: 'row', gap: 6 }}>
            {WEIGHTS.map(w => (
              <TouchableOpacity
                key={w}
                onPress={() => setWeight(w)}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical:    5,
                  borderRadius:       99,
                  backgroundColor: weight === w ? '#186338' : '#EAE6DB',
                }}
              >
                <Text style={{
                  fontSize:   11,
                  fontFamily: 'Inter',
                  color: weight === w ? '#ffffff' : '#7D715E',
                }}>
                  {w}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Size selector */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Text style={{ fontSize: 11, color: '#9AA0AD', fontFamily: 'Inter' }}>Size:</Text>
            {[16, 20, 24, 32].map(s => (
              <TouchableOpacity
                key={s}
                onPress={() => setSize(s)}
                style={{
                  width: 36, height: 28,
                  borderRadius: 6,
                  alignItems: 'center', justifyContent: 'center',
                  backgroundColor: size === s ? '#186338' : '#EAE6DB',
                }}
              >
                <Text style={{ fontSize: 11, color: size === s ? '#fff' : '#7D715E', fontFamily: 'Inter' }}>{s}</Text>
              </TouchableOpacity>
            ))}
            <Text style={{ fontSize: 11, color: '#9AA0AD', fontFamily: 'Inter', marginLeft: 8 }}>
              {filtered.length} icons
            </Text>
          </View>
        </View>

        {/* ── Icon grid ── */}
        <ScrollView contentContainerStyle={{
          flexDirection:  'row',
          flexWrap:       'wrap',
          paddingHorizontal: 8,
          paddingVertical:   8,
          gap: 2,
        }}>
          {filtered.map(name => {
            const Icon = (PhosphorIcons as Record<string, React.ComponentType<{ size: number; weight: string; color: string }>>)[name];
            if (!Icon) return null;
            const isCopied = copied === name;

            return (
              <TouchableOpacity
                key={name}
                onPress={() => {
                  setCopied(name);
                  setTimeout(() => setCopied(''), 1500);
                }}
                style={{
                  width:          80,
                  alignItems:     'center',
                  paddingVertical: 10,
                  paddingHorizontal: 4,
                  gap:             5,
                  borderRadius:    8,
                  backgroundColor: isCopied ? '#E2E9E3' : 'transparent',
                }}
              >
                <Icon size={size} weight={weight} color={isCopied ? '#186338' : '#1E3E2B'} />
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize:   9,
                    color:      isCopied ? '#186338' : '#7D715E',
                    textAlign:  'center',
                    fontFamily: 'Inter',
                    lineHeight: 13,
                  }}
                >
                  {isCopied ? '✓ copied' : name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  },
};

// ─── Sprout nav icons ─────────────────────────────────────────────────────────

/**
 * The 5 navigation tab icons — active (fill) vs inactive (regular).
 * These are the icons used in the NavigationBar component.
 */
export const NavIcons: Story = {
  name: 'Nav Tab Icons (active vs inactive)',
  render: () => {
    const navIcons: Array<{ name: string; Icon: React.ComponentType<{ size: number; weight: string; color: string }> }> = [
      { name: 'Events',    Icon: PhosphorIcons.Compass          },
      { name: 'Memories',  Icon: PhosphorIcons.Images           },
      { name: 'AI Assist', Icon: PhosphorIcons.Sparkle          },
      { name: 'Chat',      Icon: PhosphorIcons.ChatCircleDots   },
      { name: 'Clubs',     Icon: PhosphorIcons.Users            },
    ];

    return (
      <View style={{ padding: 24, backgroundColor: '#F4F1EA', gap: 24 }}>
        {/* Active row */}
        <View>
          <Text style={{ fontSize: 11, color: '#9AA0AD', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 12 }}>
            Active — weight="fill" color="#186338"
          </Text>
          <View style={{ flexDirection: 'row', gap: 32 }}>
            {navIcons.map(({ name, Icon }) => (
              <View key={name} style={{ alignItems: 'center', gap: 6 }}>
                <Icon size={24} weight="fill" color="#186338" />
                <Text style={{ fontSize: 10, color: '#186338', fontFamily: 'Inter' }}>{name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Inactive row */}
        <View>
          <Text style={{ fontSize: 11, color: '#9AA0AD', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 12 }}>
            Inactive — weight="regular" color="#7D715E"
          </Text>
          <View style={{ flexDirection: 'row', gap: 32 }}>
            {navIcons.map(({ name, Icon }) => (
              <View key={name} style={{ alignItems: 'center', gap: 6 }}>
                <Icon size={24} weight="regular" color="#7D715E" />
                <Text style={{ fontSize: 10, color: '#7D715E', fontFamily: 'Inter' }}>{name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  },
};

// ─── All 6 weights ────────────────────────────────────────────────────────────

/**
 * Shows every weight for a given icon — pick any name from the gallery.
 */
export const WeightComparison: Story = {
  name: 'Weight comparison (6 weights)',
  render: () => {
    const showcase = [
      PhosphorIcons.Heart,
      PhosphorIcons.Bell,
      PhosphorIcons.Star,
      PhosphorIcons.Compass,
      PhosphorIcons.Sparkle,
      PhosphorIcons.ChatCircleDots,
      PhosphorIcons.Users,
      PhosphorIcons.Images,
    ] as Array<React.ComponentType<{ size: number; weight: string; color: string }>>;

    const iconNames = ['Heart', 'Bell', 'Star', 'Compass', 'Sparkle', 'ChatCircleDots', 'Users', 'Images'];

    return (
      <ScrollView style={{ backgroundColor: '#F4F1EA' }}>
        <View style={{ padding: 16, gap: 16 }}>
          {WEIGHTS.map(w => (
            <View key={w}>
              <Text style={{ fontSize: 11, color: '#9AA0AD', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 10 }}>
                {w}
              </Text>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                {showcase.map((Icon, i) => (
                  <View key={iconNames[i]} style={{ alignItems: 'center', gap: 4 }}>
                    <Icon size={24} weight={w} color="#1E3E2B" />
                    <Text style={{ fontSize: 9, color: '#9AA0AD', fontFamily: 'Inter' }}>{iconNames[i]}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  },
};

// ─── Sprout colour palette ────────────────────────────────────────────────────

/**
 * How icons look with Sprout brand colours.
 */
export const BrandColours: Story = {
  name: 'Brand colour usage',
  render: () => {
    const icons = [
      PhosphorIcons.Compass,
      PhosphorIcons.Heart,
      PhosphorIcons.Bell,
      PhosphorIcons.Star,
    ] as Array<React.ComponentType<{ size: number; weight: string; color: string }>>;

    const colors = [
      { label: 'Active / brand/500',  color: '#186338' },
      { label: 'Inactive / warm brown', color: '#7D715E' },
      { label: 'Muted / grey/400',    color: '#9AA0AD' },
      { label: 'Error / error/500',   color: '#D64545' },
      { label: 'White',               color: '#ffffff', bg: '#186338' },
    ];

    return (
      <View style={{ padding: 20, backgroundColor: '#F4F1EA', gap: 20 }}>
        {colors.map(({ label, color, bg }) => (
          <View key={label}>
            <Text style={{ fontSize: 11, color: '#9AA0AD', fontFamily: 'Inter', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              {label} · {color}
            </Text>
            <View style={{ flexDirection: 'row', gap: 20, backgroundColor: bg, padding: bg ? 12 : 0, borderRadius: bg ? 12 : 0 }}>
              {icons.map((Icon, i) => (
                <Icon key={i} size={24} weight="regular" color={color} />
              ))}
              {icons.map((Icon, i) => (
                <Icon key={`fill-${i}`} size={24} weight="fill" color={color} />
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  },
};
