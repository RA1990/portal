import React from 'react';
import { linkTo } from '@storybook/addon-links';
import App from '../App';

export default {
  title: 'Welcome',
  component: App,
};

export const ToStorybook = () => <App/>;

ToStorybook.story = {
  name: 'to Storybook',
};
