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

  static aboutData = [
    {
      id: 2,
      displayName: 'Eric G. Hollis',
      avatarName: 'Eric Hollis',
      color: 'red',
      content: `
        test text mdsfbbafhdbsab hfhfjbabff fasfsfasdj hfjashfjdsah
        fhjkdkjfljashjfh afsdfdasfasfdsfads fasfdsaff dfasdfdas fasdfsafdsafdsafad
      `,
    },
    {
      id: 3,
      displayName: 'Tyler R. Glaze',
      avatarName: 'Tyler Glaze',
      color: 'yellow',
      content: `
        test text mdsfbba fhdbsabhfhfjbabff fasfsfasdjhfjashfj dsahfhjkdkjfljashjfh
        afsdfdasfasfdsfadsfasfdsaffd fasdfdas fasdfsafdsafdsafad
      `,
    },
    {
      id: 4,
      displayName: 'Rebecca Cap4Kidz',
      avatarName: 'Rebecca Cap4Kidz',
      color: 'blue',
      content: `
        test text mdsfbbafhdb sabhfhfjbabff fasfsfasdjhfjashfjdsahfh jkdkjfljashjfh
        afsdfdasfasfdsfa dsfasf dsaffdfasdfdas fasdfsafdsafdsafad
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
