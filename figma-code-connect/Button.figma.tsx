/**
 * Figma Code Connect — Button
 *
 * ✅ Real Figma node IDs from live scan (not placeholders)
 *
 * Component set: "Button"  node id: 11:179
 * Page: ↪︎ Components
 * File: EhpRiGZ5eJnBb132X9zewg
 *
 * Sample variant node IDs (for reference):
 *   Primary  / Large  / Default / Icon Only=False → 11:180
 *   Primary  / Large  / Default / Icon Only=True  → 11:244
 *   Secondary/ Large  / Default / Icon Only=False → 11:276
 *   Tertiary / Large  / Default / Icon Only=False → 11:372
 *
 * IMPORTANT: Button label font in Figma is Playfair Display Medium (NOT Inter).
 *
 * HOW TO PUBLISH:
 *   npx figma connect publish --token <your-figma-personal-access-token>
 *
 * Get token: figma.com → Account Settings → Personal Access Tokens
 *   → "Dev Resources" scope required.
 */

import figma from '@figma/code-connect';
import { Button } from '../src/components/Button/Button';

figma.connect(
  Button,
  // ✅ Real component set URL with actual node ID 11:179
  'https://www.figma.com/design/EhpRiGZ5eJnBb132X9zewg/Sprout-Design--Prod-?node-id=11-179',
  {
    props: {
      // Figma variant property "Type" → ButtonType prop (4 types confirmed from scan)
      type: figma.enum('Type', {
        Primary:     'Primary',
        Secondary:   'Secondary',
        Tertiary:    'Tertiary',
        Destructive: 'Destructive',
      }),

      // Figma variant property "Size" → ButtonSize prop
      size: figma.enum('Size', {
        Large:  'Large',
        Medium: 'Medium',
        Small:  'Small',
        XSmall: 'XSmall',
      }),

      // Figma variant property "States" → disabled prop
      disabled: figma.enum('States', {
        Default:  false,
        Hover:    false,
        Focused:  false,
        Disabled: true,
      }),

      // Figma variant property "Icon Only" → iconOnly prop
      iconOnly: figma.boolean('Icon Only'),

      // Text from the TEXT node named "Button" inside variants
      label: figma.string('Label'),
    },

    example: ({ type, size, label, iconOnly, disabled }) => (
      // When type="Destructive", disabled state shows #F7DADA bg (not opacity)
      <Button
        type={type}
        size={size}
        label={label ?? 'Button'}
        iconOnly={iconOnly}
        disabled={disabled}
        onPress={() => {}}
      />
    ),
  }
);
