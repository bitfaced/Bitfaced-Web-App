import React from 'react';
import { Dialog, Avatar, Text } from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import { DEFAULT_CONTENT_NODE } from '../../constants';

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
          <div>
            <Avatar isSolid color="green" name="Bit Faced" size={60} />
            <Text size={700}>
            BitFaced
            </Text>
            <p>
              jfajhjkdahfjdshkfh
              adsffdsffdsfdsafdasfdsafasdf
              dsafafsdasfadsfasdfsadfdasfdasf
              adsfasfadsfadsfsdafdsaf
            </p>
            <p>
              jfajhjkdahfjdshkfh
              adsffdsffdsfdsafdasfdsafasdf
              dsafafsdasfadsfasdfsadfdasfdasf
              adsfasfadsfadsfsdafdsaf
            </p>
          </div>

          <div>
            <Avatar name="Eric Hollis" size={60} />
            <Text size={700}>
            Eric G. Hollis
            </Text>
            <p>
              jfajhjkdahfjdshkfh
              adsffdsffdsfdsafdasfdsafasdf
              dsafafsdasfadsfasdfsadfdasfdasf
              adsfasfadsfadsfsdafdsaf
            </p>
            <p>
              jfajhjkdahfjdshkfh
              adsffdsffdsfdsafdasfdsafasdf
              dsafafsdasfadsfasdfsadfdasfdasf
              adsfasfadsfadsfsdafdsaf
            </p>
          </div>

          <div>
            <Avatar name="Tyler Glaze" size={60} />
            <Text size={700}>
            Tyler Glaze
            </Text>
            <p>
              jfajhjkdahfjdshkfh
              adsffdsffdsfdsafdasfdsafasdf
              dsafafsdasfadsfasdfsadfdasfdasf
              adsfasfadsfadsfsdafdsaf
            </p>
          </div>

        </Dialog>
      </div>
    );
  }
}

export default AboutContent;
