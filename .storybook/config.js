// .storybook/config.js
import { configure } from '@storybook/react';
// this automatically import all files ending in *.stories.tsx
configure(require.context('./src/stories', true, /\.stories\.tsx?$/), module);
