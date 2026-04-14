/**
 * Figma Code Connect — Badge / Indicator
 *
 * Figma file: EhpRiGZ5eJnBb132X9zewg
 */

import figma from '@figma/code-connect';
import { Badge } from '../src/components/Badge/Badge';

figma.connect(
  Badge,
  'https://www.figma.com/design/EhpRiGZ5eJnBb132X9zewg?node-id=BADGE_NODE_ID',
  {
    props: {
      variant: figma.enum('Variant', {
        Dot:   'Dot',
        Count: 'Count',
        Label: 'Label',
      }),

      color: figma.enum('Color', {
        Brand:   'Brand',
        Success: 'Success',
        Error:   'Error',
        Warning: 'Warning',
        Info:    'Info',
        Neutral: 'Neutral',
      }),

      size: figma.enum('Size', {
        Large:  'Large',
        Medium: 'Medium',
        Small:  'Small',
      }),

      label: figma.string('Label'),
    },

    example: ({ variant, color, size, label }) => (
      <Badge
        variant={variant}
        color={color}
        size={size}
        label={label}
      />
    ),
  }
);
