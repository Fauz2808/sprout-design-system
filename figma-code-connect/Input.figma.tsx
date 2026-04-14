/**
 * Figma Code Connect — Input
 *
 * ✅ Real Figma node IDs from live scan (Input Form 2)
 *
 * Component set: "Input Form"  node id: 33:8502
 * Page: ↪︎ Components
 * File: EhpRiGZ5eJnBb132X9zewg
 *
 * Variant node IDs (confirmed from live scan):
 *   State=Normal,   Size=Large  → 33:8503
 *   State=Focused,  Size=Large  → 33:8513
 *   State=Filled,   Size=Large  → 33:8523
 *   State=Disable,  Size=Large  → 33:8533
 *   State=Error,    Size=Large  → 33:8543
 *   State=Normal,   Size=Medium → 33:8553
 *   State=Focused,  Size=Medium → 33:8563
 *   State=Filled,   Size=Medium → 33:8573
 *   State=Disable,  Size=Medium → 33:8583
 *   State=Error,    Size=Medium → 33:8593
 *
 * Key Figma variant values:
 *   - Figma uses "State=Disable" (not "Disabled")
 *   - Field bg Normal/Focused/Filled: #EAE6DB
 *   - Field bg Disabled: #CDCFD6
 *   - Field bg Error: #F4F1EA (lighter cream)
 *   - Stroke Error: #D64545 (error/500)
 *   - Left outer icon (PlusCircle): 24×24
 *   - Inner leading icon (Cube):    20×20 Large / 16×16 Medium
 *   - Right icon (Eye):             20×20 Large / 16×16 Medium
 *
 * HOW TO PUBLISH:
 *   npx figma connect publish --token <your-figma-personal-access-token>
 */

import figma from '@figma/code-connect';
import { Input } from '../src/components/Input/Input';

figma.connect(
  Input,
  // ✅ Real component set URL with actual node ID 33:8502
  'https://www.figma.com/design/EhpRiGZ5eJnBb132X9zewg/Sprout-Design--Prod-?node-id=33-8502',
  {
    props: {
      // Figma variant "Size" → size prop
      size: figma.enum('Size', {
        Large:  'Large',
        Medium: 'Medium',
      }),

      // Figma variant "State" → disabled / errorMessage props
      disabled: figma.enum('State', {
        Normal:  false,
        Focused: false,
        Filled:  false,
        Disable: true,   // Figma spells it "Disable" (no d)
        Error:   false,
      }),

      errorMessage: figma.enum('State', {
        Error:   'This is a hint text to help user',
        Normal:  undefined,
        Focused: undefined,
        Filled:  undefined,
        Disable: undefined,
      }),

      // Text nodes inside variant
      label:       figma.string('Label'),
      placeholder: figma.string('Placeholder'),
    },

    example: ({ size, label, placeholder, disabled, errorMessage }) => (
      <Input
        size={size}
        label={label ?? 'Label'}
        placeholder={placeholder ?? 'Placeholder'}
        hint="This is a hint text to help user"
        disabled={disabled}
        errorMessage={errorMessage}
        // Swap these with your real icon components:
        // leftIcon={<YourLeftIcon />}
        // leadingIcon={<YourLeadingIcon />}
        // rightIcon={<EyeIcon />}
      />
    ),
  }
);
