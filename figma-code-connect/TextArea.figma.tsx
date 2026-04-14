/**
 * Figma Code Connect — TextArea
 *
 * ✅ Real Figma node IDs from live scan
 *
 * Component set: "Text Area"  node id: 32:1014
 * Page: ↪︎ Components
 * File: EhpRiGZ5eJnBb132X9zewg
 *
 * Variant node IDs (confirmed from live scan):
 *   State=Default → 32:1013
 *   State=Focused → 32:1012
 *   State=Filled  → 32:1011
 *   State=Error   → 32:1010
 *
 * Key Figma values:
 *   - Field bg Default/Focused/Filled: #EAE6DB (secondary/600)
 *   - Field bg Error:                  #F4F1EA (secondary/500 — lighter cream)
 *   - Stroke Default/Focused/Filled:   #E6E7EA (grey/100), weight=1
 *   - Stroke Error:                    #D64545, weight=1
 *   - Padding: all sides 16px
 *   - Field height: 278px min
 *   - Floating label: Playfair Display Medium 12px, #1E3E2B
 *   - Placeholder: Inter Regular 12px, #818898
 *   - No size variants (single size component)
 *   - No icon slots
 *
 * HOW TO PUBLISH:
 *   npx figma connect publish --token <your-figma-personal-access-token>
 */

import figma from '@figma/code-connect';
import { TextArea } from '../src/components/TextArea/TextArea';

figma.connect(
  TextArea,
  // ✅ Real component set URL with actual node ID 32:1014
  'https://www.figma.com/design/EhpRiGZ5eJnBb132X9zewg/Sprout-Design--Prod-?node-id=32-1014',
  {
    props: {
      // Figma variant "State" → errorMessage / disabled props
      errorMessage: figma.enum('State', {
        Error:   'This is a hint text to help user',
        Default: undefined,
        Focused: undefined,
        Filled:  undefined,
      }),

      // Text nodes inside variants
      label:       figma.string('Label'),
      placeholder: figma.string('Placeholder'),
    },

    example: ({ label, placeholder, errorMessage }) => (
      <TextArea
        label={label ?? 'Label'}
        placeholder={placeholder ?? 'Placeholder'}
        hint="This is a hint text to help user"
        errorMessage={errorMessage}
      />
    ),
  }
);
