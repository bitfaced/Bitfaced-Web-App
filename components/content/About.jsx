import React from 'react';
import {
  Dialog,
} from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import AboutPane from './AboutPane';
import settings from '../../utilities/siteSettings';

const aboutContainerStyles = {
  width: '80%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  borderRadis: '3px',
};

class AboutContent extends React.Component {
  static propTypes = {
    onContentChange: PropTypes.func.isRequired,
  }

  static getEricContent = () => (
    <div>
      Eric G. Hollis and Tyler Glaze first met while attending a weekend tree shaping retreat and
      bonded over a mutual love of pants-free hang gliding and dining on raw puffin hearts.
      Podcasting seemed like a natural continuation of friendship, or at least a way to completely
      ruin something quality in the public spectrum.  The pair met Rebecca Daniels while she was
      spearheading an empire of kitten orphanages, and she decided to forgo doing something
      meaningful with her life to regularly contribute to the show.  Thrusting pop culture into a
      proverbial blender while maintaining zero level of organization, the Bitaced crew is here
      to make you think that anyone can be a podcaster, because you really only have to have a
      microphone and nothing important to say.
    </div>
  );

  static aboutData = [
    {
      id: 1,
      displayName: 'Bitfaced',
      avatarName: 'Bit Faced',
      color: 'green',
      content: AboutContent.getEricContent(),
    },
  ];

  static aboutContent = AboutContent.aboutData.map(contentNode => (
    <AboutPane
      displayName={contentNode.displayName}
      avatarName={contentNode.avatarName}
      color={contentNode.color}
      content={contentNode.content}
      key={contentNode.id}
    />
  ));

  constructor(props) {
    super(props);
    this.state = {};
  }

  onClose = () => {
    const { onContentChange } = this.props;

    onContentChange(settings.DEFAULT_CONTENT);
  }

  render() {
    return (
      <div style={aboutContainerStyles}>
        <Dialog
          isShown
          hasCancel={false}
          title="About BitFaced"
          onCloseComplete={this.onClose}
          confirmLabel="Back to Home"
        >
          {AboutContent.aboutContent}
        </Dialog>
      </div>
    );
  }
}

export default AboutContent;
