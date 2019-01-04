import React from 'react';
import HomeContent from './components/content/Home';
import AboutContent from './components/content/About';
import ContactContent from './components/content/Contact';

export const CONTENT_NODES = {
  home: {
    displayName: 'Home',
    component: () => (
      <HomeContent />
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
};

export const DEFAULT_CONTENT_NODE = 'home';

export const noop = () => {};
