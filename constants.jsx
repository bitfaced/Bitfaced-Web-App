import React from 'react';
import HomeContent from './components/content/Home';
import AboutContent from './components/content/About';
import ContactContent from './components/content/Contact';
import PacManContent from './components/content/PacMan';
import TeamContent from './components/content/Team';
import SocialContent from './components/content/Social';
import DevelopContent from './components/content/Develop';

export const CONTENT_NODES = {
  home: {
    displayName: 'Home',
    iconKey: 'home',
    component: (onContentChange, imagePosition) => (
      <HomeContent
        onContentChange={onContentChange}
        imagePosition={imagePosition}
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
  develop: {
    displayName: 'Help Develop Bitfaced.com',
    iconKey: 'code',
    component: onContentChange => (
      <DevelopContent
        onContentChange={onContentChange}
      />
    ),
  },
};

export const noop = () => {};
