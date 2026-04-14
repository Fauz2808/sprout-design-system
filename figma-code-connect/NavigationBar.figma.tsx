/**
 * Figma Code Connect — NavigationBar
 *
 * ✅ Real Figma node IDs from live scan
 *
 * Component set: "Navigation Bar"  node id: 100:8821
 * Page: ↪︎ Components
 * File: EhpRiGZ5eJnBb132X9zewg
 *
 * Variant node IDs (confirmed from live scan):
 *   Type=Home      → 100:8818  (tab label: "Events", icon: Compass)
 *   Type=Memories  → 100:8817  (tab label: "Memories", icon: Images)
 *   Type=AI Assist → 100:9768  (tab label: "AI Assist", icon: Sparkle)
 *   Type=Chat      → 100:8819  (tab label: "Chat", icon: ChatCircleDots)
 *   Type=Clubs     → 100:8820  (tab label: "Clubs", icon: Users)
 *
 * Key Figma properties:
 *   - Shape: cornerRadius=9999 (floating pill)
 *   - Background: #F4F1EA (cream, Secondary/500)
 *   - Border: #E6E7EA 1px
 *   - Active:   icon filled #186338, label #186338
 *   - Inactive: icon outlined #7D715E, label #7D715E
 *   - Chat badge: 16×16 #186338 circle, white Inter Medium 10px
 *
 * NOTE: Figma "Type=Home" variant shows "Events" as the first tab label.
 *       The tab key used in code is 'events' (matches the label, not the Figma Type).
 *
 * HOW TO PUBLISH:
 *   npx figma connect publish --token <your-figma-personal-access-token>
 */

import figma from '@figma/code-connect';
import React from 'react';
import {
  AIAssistIcon,
  ChatIcon,
  ClubsIcon,
  EventsIcon,
  MemoriesIcon,
} from '../src/components/Icons';
import { NavigationBar, type NavTab } from '../src/components/NavigationBar/NavigationBar';

// ─── Standard Sprout tab definitions ─────────────────────────────────────────
// Icons: phosphor-react-native wrappers — active=fill weight #186338, inactive=regular #7D715E
// Figma source icons: Compass, Images, Sparkle, ChatCircleDots, Users (all 24×24)
const SPROUT_TABS: NavTab[] = [
  {
    key:   'events',
    label: 'Events',
    icon:  (active) => <EventsIcon active={active} size={24} />,
  },
  {
    key:   'memories',
    label: 'Memories',
    icon:  (active) => <MemoriesIcon active={active} size={24} />,
  },
  {
    key:   'ai-assist',
    label: 'AI Assist',
    icon:  (active) => <AIAssistIcon active={active} size={24} />,
  },
  {
    key:   'chat',
    label: 'Chat',
    icon:  (active) => <ChatIcon active={active} size={24} />,
    badge: 2,  // ← use real unread count from your state
  },
  {
    key:   'clubs',
    label: 'Clubs',
    icon:  (active) => <ClubsIcon active={active} size={24} />,
  },
];

figma.connect(
  NavigationBar,
  // ✅ Real component set URL with actual node ID 100:8821
  'https://www.figma.com/design/EhpRiGZ5eJnBb132X9zewg/Sprout-Design--Prod-?node-id=100-8821',
  {
    props: {
      // Figma "Type" variant → activeTab key
      // NOTE: "Type=Home" displays the "Events" tab as active in Figma
      activeTab: figma.enum('Type', {
        Home:       'events',
        Memories:   'memories',
        'AI Assist':'ai-assist',
        Chat:       'chat',
        Clubs:      'clubs',
      }),
    },

    example: ({ activeTab }) => (
      <NavigationBar
        tabs={SPROUT_TABS}
        activeTab={activeTab}
        onTabPress={(key) => {
          // navigate to screen — e.g. navigation.navigate(key)
        }}
        bottomInset={34}  // iPhone home indicator height; use 0 on Android
      />
    ),
  }
);
