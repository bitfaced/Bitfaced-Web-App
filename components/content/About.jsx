import React from 'react';
import {
  Dialog,
} from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import { DEFAULT_CONTENT_NODE } from '../../constants';
import AboutPane from './AboutPane';

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

  static aboutData = [
    {
      id: 1,
      displayName: 'Bitfaced',
      avatarName: 'Bit Faced',
      color: 'green',
      content: `
        A pop culture and gaming podcast.  Funny af.
        Bitfaced is a pop culture and gaming podcast.  Funny af.
        Bitfaced is a pop culture and gaming podcast.  Funny af.
      `,
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

    onContentChange(DEFAULT_CONTENT_NODE);
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
