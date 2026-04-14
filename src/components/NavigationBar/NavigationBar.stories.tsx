/**
 * NavigationBar Stories — Sprout Design System
 *
 * ✅ Covers all 5 Figma Type variants:
 *   Type=Home (Events) | Type=Memories | Type=AI Assist | Type=Chat | Type=Clubs
 *
 * Figma source: node 100:8821, page: ↪︎ Components
 * Figma file: EhpRiGZ5eJnBb132X9zewg
 *
 * KEY VALUES from live Figma scan:
 *   - Shape: floating pill, cornerRadius=9999
 *   - Background: #F4F1EA (cream), border: #E6E7EA 1px
 *   - Height: 69px, side margin: 16px, bottom gap: 32px (from Home screen scan)
 *   - ALL labels: Inter Regular 11px (NOT Playfair Display)
 *   - Active: icon filled #186338, label #186338
 *   - Inactive: icon outlined #7D715E, label #7D715E
 *   - Chat badge: 16×16 #186338 circle, white Inter Medium 10px
 *   - NO pill indicator behind active tab — color change only
 *
 * POSITIONING (from Home screen node 1:17285):
 *   Nav bar x=16, y=751 in 393×852 frame.
 *   In production use:
 *     position: 'absolute', bottom: insets.bottom + 32, left: 16, right: 16
 *   Or wrap in a safe-area-aware View at the bottom of the screen.
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  AIAssistIcon,
  ChatIcon,
  ClubsIcon,
  EventsIcon,
  MemoriesIcon,
} from '../Icons';
import { NavigationBar, type NavTab } from './NavigationBar';

/**
 * Standard Sprout tab set — labels and order confirmed from Figma text nodes.
 * Icons: phosphor-react-native (Compass, Images, Sparkle, ChatCircleDots, Users).
 * NOTE: Figma "Type=Home" variant's first tab is labeled "Events" (not "Home").
 */
const SPROUT_TABS: NavTab[] = [
  {
    key:   'events',
    label: 'Events',
    // Figma: Compass — fill weight active, regular inactive
    icon: (active) => <EventsIcon active={active} size={24} />,
  },
  {
    key:   'memories',
    label: 'Memories',
    // Figma: Images
    icon: (active) => <MemoriesIcon active={active} size={24} />,
  },
  {
    key:   'ai-assist',
    label: 'AI Assist',
    // Figma: Sparkle
    icon: (active) => <AIAssistIcon active={active} size={24} />,
  },
  {
    key:   'chat',
    label: 'Chat',
    // Figma: ChatCircleDots — badge "2" confirmed from all 5 Figma variant scans
    icon:  (active) => <ChatIcon active={active} size={24} />,
    badge: 2,
  },
  {
    key:   'clubs',
    label: 'Clubs',
    // Figma: Users
    icon: (active) => <ClubsIcon active={active} size={24} />,
  },
];

// ─── Shared screen wrapper — simulates the iPhone screen context ──────────────
// Matches Figma Home screen (393×852): cream bg, nav bar floated at bottom.
const ScreenWrapper = ({
  activeTab,
  badge,
  withFade = false,
}: {
  activeTab: string;
  badge?: number;
  withFade?: boolean;
}) => {
  const tabs = badge != null
    ? SPROUT_TABS.map(t => t.key === 'chat' ? { ...t, badge } : t)
    : SPROUT_TABS;

  return (
    <View style={{ height: 220, backgroundColor: '#EAE8E0', justifyContent: 'flex-end' }}>
      {/* Simulated scrollable content above */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        <Text style={{ fontSize: 11, color: '#9AA0AD', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: 0.6 }}>
          active
        </Text>
        <Text style={{ fontSize: 18, fontFamily: 'Playfair Display', fontWeight: '500', color: '#186338' }}>
          {tabs.find(t => t.key === activeTab)?.label ?? activeTab}
        </Text>
      </View>

      {/* Nav bar — floated at bottom with 32px gap (matches Figma screen scan) */}
      <NavigationBar
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={() => {}}
        bottomInset={32}
        sideMargin={16}
        withFade={withFade}
      />
    </View>
  );
};

// ─── Meta ────────────────────────────────────────────────────────────────────

const meta: Meta<typeof NavigationBar> = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '**Figma:** `node 100:8821` — Navigation Bar (5 variants by Type)',
          '',
          '**Shape:** Floating pill — `cornerRadius: 9999`, border `#E6E7EA 1px`, dual drop shadow.',
          '',
          '**No pill indicator.** Active tab = icon becomes solid `#186338`, label becomes `#186338`.',
          '',
          '**Positioning (from Figma Home screen scan):** `x=16, y=751` in 393×852 frame. ',
          'Side margin 16px, 32px gap from screen bottom.',
          '',
          '```jsx',
          '// In production (absolute positioning):',
          '<NavigationBar',
          '  tabs={SPROUT_TABS}',
          '  activeTab={currentTab}',
          '  onTabPress={setCurrentTab}',
          '  bottomInset={insets.bottom + 32}',
          '  sideMargin={16}',
          '  style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}',
          '/>',
          '```',
        ].join('\n'),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

// ─── Per-tab stories — one per Figma Type variant ────────────────────────────

/**
 * Type=Home — "Events" tab active.
 * Figma: Compass icon filled green, "Events" label green.
 */
export const TypeHome: Story = {
  name: 'Type=Home (Events active)',
  render: () => <ScreenWrapper activeTab="events" />,
};

/**
 * Type=Memories — "Memories" tab active.
 * Figma: Images icon filled green, "Memories" label green.
 */
export const TypeMemories: Story = {
  name: 'Type=Memories (Memories active)',
  render: () => <ScreenWrapper activeTab="memories" />,
};

/**
 * Type=AI Assist — "AI Assist" tab active.
 * Figma: Sparkle icon filled green, "AI Assist" label green.
 */
export const TypeAiAssist: Story = {
  name: 'Type=AI Assist (AI Assist active)',
  render: () => <ScreenWrapper activeTab="ai-assist" />,
};

/**
 * Type=Chat — "Chat" tab active.
 * Figma: ChatCircleDots icon filled green, badge "2" visible (#186338 bg, white text).
 */
export const TypeChat: Story = {
  name: 'Type=Chat (Chat active)',
  render: () => <ScreenWrapper activeTab="chat" />,
};

/**
 * Type=Clubs — "Clubs" tab active.
 * Figma: Users icon filled green, "Clubs" label green.
 */
export const TypeClubs: Story = {
  name: 'Type=Clubs (Clubs active)',
  render: () => <ScreenWrapper activeTab="clubs" />,
};

// ─── Interactive ──────────────────────────────────────────────────────────────

/**
 * Interactive — tap any tab to switch.
 * Shows active state color change on both icon and label.
 */
export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState<string>('events');

    return (
      <View style={{ height: 260, backgroundColor: '#EAE8E0', justifyContent: 'flex-end' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          <Text style={{ fontSize: 11, color: '#9AA0AD', textTransform: 'uppercase', letterSpacing: 0.6 }}>tap a tab</Text>
          <Text style={{ fontSize: 20, fontFamily: 'Playfair Display', fontWeight: '500', color: '#186338' }}>
            {SPROUT_TABS.find(t => t.key === active)?.label}
          </Text>
        </View>
        <NavigationBar
          tabs={SPROUT_TABS}
          activeTab={active}
          onTabPress={setActive}
          bottomInset={32}
        />
      </View>
    );
  },
};

// ─── All 5 variants stacked ───────────────────────────────────────────────────

/**
 * All 5 Type variants — mirrors the Figma component set layout.
 * Use this to visually verify all 5 match Figma exactly.
 */
export const AllVariants: Story = {
  name: 'All 5 variants (full matrix)',
  render: () => (
    <View style={{ backgroundColor: '#DDD9D0', padding: 12, gap: 10 }}>
      {SPROUT_TABS.map(tab => (
        <View key={tab.key}>
          <Text style={{
            fontSize: 10, color: '#9AA0AD', marginBottom: 4,
            fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: 0.5,
          }}>
            Type={tab.key === 'events' ? 'Home' : tab.key === 'ai-assist' ? 'AI Assist' : tab.label}
          </Text>
          <NavigationBar
            tabs={SPROUT_TABS}
            activeTab={tab.key}
            onTabPress={() => {}}
            bottomInset={0}
          />
        </View>
      ))}
    </View>
  ),
};

// ─── Badge variants ───────────────────────────────────────────────────────────

/** Chat badge = 2 (matches Figma — shown in all 5 Figma variants) */
export const WithBadge: Story = {
  name: 'Chat badge = 2 (Figma default)',
  render: () => <ScreenWrapper activeTab="events" badge={2} />,
};

/** Badge cleared — 0 hides the bubble */
export const NoBadge: Story = {
  name: 'Chat badge cleared',
  render: () => <ScreenWrapper activeTab="events" badge={0} />,
};

/** Large unread count — truncated to "99+" */
export const LargeBadge: Story = {
  name: 'Chat badge 99+',
  render: () => <ScreenWrapper activeTab="chat" badge={142} />,
};

// ─── Production positioning ───────────────────────────────────────────────────

/**
 * Shows the nav bar as it appears in the Figma Home screen:
 * positioned absolutely at the bottom with 32px gap and 16px side margins.
 *
 * In production, use react-native-safe-area-context:
 *   bottomInset={insets.bottom + 32}
 */
export const ProductionLayout: Story = {
  name: 'Production layout (absolute position)',
  render: () => (
    <View style={{ height: 320, backgroundColor: '#EAE8E0', position: 'relative' }}>
      {/* Scrollable page content */}
      <View style={{ padding: 20, gap: 8 }}>
        <Text style={{ fontFamily: 'Playfair Display', fontWeight: '500', fontSize: 22, color: '#1E3E2B' }}>Home</Text>
        <Text style={{ fontSize: 12, color: '#7D715E', fontFamily: 'Inter' }}>Discover Events · My Events</Text>
        <View style={{ height: 1, backgroundColor: '#E6E7EA', marginTop: 4 }} />
        <View style={{ height: 120, backgroundColor: '#F4F1EA', borderRadius: 12 }} />
      </View>

      {/* Nav bar — absolute, bottom=32, horizontal margin=16 (matches Figma x=16) */}
      <NavigationBar
        tabs={SPROUT_TABS}
        activeTab="events"
        onTabPress={() => {}}
        bottomInset={32}
        style={{
          position: 'absolute',
          bottom:   0,
          left:     0,
          right:    0,
        }}
      />
    </View>
  ),
};

// ─── With fade overlay ────────────────────────────────────────────────────────

/**
 * With fade overlay — matches the Figma Overlay frame (y=725, h=127 in Home screen).
 * The fade zone helps the nav bar feel "lifted" above scrollable content.
 *
 * For a true gradient, replace the fade View with LinearGradient from
 * react-native-linear-gradient:
 *   <LinearGradient colors={['rgba(244,241,234,0)', '#F4F1EA']} style={fadeStyle} />
 */
export const WithFadeOverlay: Story = {
  name: 'With fade overlay (Figma Overlay frame)',
  render: () => (
    <View style={{ height: 240, backgroundColor: '#EAE8E0', justifyContent: 'flex-end' }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ height: 80, backgroundColor: '#D8D4CB', borderRadius: 10 }} />
      </View>
      <NavigationBar
        tabs={SPROUT_TABS}
        activeTab="events"
        onTabPress={() => {}}
        bottomInset={32}
        withFade
      />
    </View>
  ),
};
