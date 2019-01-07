import React from 'react';
import HomeContent from './components/content/Home';
import AboutContent from './components/content/About';
import ContactContent from './components/content/Contact';
import PacManContent from './components/content/PacMan';

export const CONTENT_NODES = {
  home: {
    displayName: 'Home',
    component: onContentChange => (
      <HomeContent
        onContentChange={onContentChange}
      />
    ),
  },
  about: {
    displayName: 'About Bitfaced',
    component: onContentChange => (
      <AboutContent
        onContentChange={onContentChange}
      />
    ),
  },
  contact: {
    displayName: 'Contact Bitfaced',
    component: onContentChange => (
      <ContactContent
        onContentChange={onContentChange}
      />
    ),
  },
  pacman: {
    displayName: '',
    component: onContentChange => (
      <PacManContent
        onContentChange={onContentChange}
      />
    ),
  },
};

export const DEFAULT_CONTENT_NODE = 'home';

export const noop = () => {};
