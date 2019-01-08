import React from 'react';
import HomeContent from './components/content/Home';
import AboutContent from './components/content/About';
import ContactContent from './components/content/Contact';
import PacManContent from './components/content/PacMan';
import TeamContent from './components/content/Team';
import SocialContent from './components/content/Social';

export const CONTENT_NODES = {
  home: {
    displayName: 'Home',
    iconKey: 'home',
    component: onContentChange => (
      <HomeContent
        onContentChange={onContentChange}
      />
    ),
  },
  about: {
    displayName: 'About Bitfaced',
    iconKey: 'info-sign',
    component: onContentChange => (
      <AboutContent
        onContentChange={onContentChange}
      />
    ),
  },
  team: {
    displayName: 'The Bitfaced Team',
    iconKey: 'people',
    component: onContentChange => (
      <TeamContent
        onContentChange={onContentChange}
      />
    ),
  },
  contact: {
    displayName: 'Contact Us',
    iconKey: 'chat',
    component: onContentChange => (
      <ContactContent
        onContentChange={onContentChange}
      />
    ),
  },
  social: {
    displayName: 'Find us on Social Media',
    iconKey: 'social-media',
    component: onContentChange => (
      <SocialContent
        onContentChange={onContentChange}
      />
    ),
  },
  pacman: {
    displayName: '',
    iconKey: '',
    component: onContentChange => (
      <PacManContent
        onContentChange={onContentChange}
      />
    ),
  },
};

export const DEFAULT_CONTENT_NODE = 'home';

export const noop = () => {};
