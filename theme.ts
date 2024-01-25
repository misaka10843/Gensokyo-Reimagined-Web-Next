import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    'touhou-red': [
      '#ffebf2',
      '#fad8e0',
      '#ecb0be',
      '#df849a',
      '#d4607b',
      '#ce4968',
      '#cc3c5e',
      '#b52d4e',
      '#a22645',
      '#901a3a',
    ],
  },
  primaryColor: 'touhou-red',
  primaryShade: { light: 5, dark: 9 },
});
