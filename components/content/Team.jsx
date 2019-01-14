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

class TeamContent extends React.Component {
  static propTypes = {
    onContentChange: PropTypes.func.isRequired,
  }

  static getEricContent = () => (
    <div>
      De facto leader of the Bitfaced crew only because nobody else wanted to do
      it.  Video game historian, convention host, podcaster, writer, uber-geek,
      and stand-up comedian are words that he would like to use to describe himself,
      but whether that rings accurate is completely up to the audience.
      You can find Eric on Facebook, Twitter, Instagram,
      and often selling used copies of his memoir
      <i> This Boys Life Among the Electrical Lights </i>
      on the side of Dublin boulevard in Colorado Springs.
    </div>
  );

  static aboutData = [
    {
      id: 2,
      displayName: 'Eric G. Hollis',
      avatarName: 'Eric Hollis',
      color: 'red',
      content: TeamContent.getEricContent(),
    },
    {
      id: 3,
      displayName: 'Tyler R. Glaze',
      avatarName: 'Tyler Glaze',
      color: 'yellow',
      content: `
        Tyler is Eric's sidekick.
      `,
    },
    {
      id: 4,
      displayName: 'Rebecca Daniels',
      avatarName: 'Rebecca Daniels',
      color: 'blue',
      content: `
       Rebecca is rad, and runs a dope chairty.
      `,
    },
  ];

  static aboutContent = TeamContent.aboutData.map(contentNode => (
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
          title="Meet the BitFaced Team"
          onCloseComplete={this.onClose}
          confirmLabel="Back to Home"
        >
          {TeamContent.aboutContent}
        </Dialog>
      </div>
    );
  }
}

export default TeamContent;
