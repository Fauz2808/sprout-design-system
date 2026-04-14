import type { Preview } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { colors } from '../tokens/theme';

/**
 * Global Storybook decorator — wraps every story in a Sprout-themed container.
 * Simulates the cream background of the Sprout app (#f4f1ea).
 */
const withSproutTheme = (Story: React.ComponentType) => (
  <View
    style={{
      flex: 1,
      backgroundColor: colors.secondary[500], // #f4f1ea
      padding: 24,
      minHeight: 200,
      justifyContent: 'center',
    }}
  >
    <Story />
  </View>
);

const preview: Preview = {
  decorators: [withSproutTheme],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      description: {
        component: '',
      },
      canvas: {
        sourceState: 'shown',
      },
    },

    backgrounds: {
      default: 'Sprout Cream',
      values: [
        { name: 'Sprout Cream', value: colors.secondary[500] },   // #f4f1ea
        { name: 'Sprout White', value: '#ffffff' },
        { name: 'Sprout Dark', value: colors.brand[700] },         // #1e3e2b
      ],
    },

    viewport: {
      viewports: {
        iphone14: {
          name: 'iPhone 14',
          styles: { width: '390px', height: '844px' },
          type: 'mobile',
        },
        iphone14ProMax: {
          name: 'iPhone 14 Pro Max',
          styles: { width: '430px', height: '932px' },
          type: 'mobile',
        },
        pixel7: {
          name: 'Pixel 7',
          styles: { width: '412px', height: '915px' },
          type: 'mobile',
        },
      },
      defaultViewport: 'iphone14',
    },
  },
};

export default preview;
