import React from 'react';
import {
  Dialog,
  Alert,
  Pane,
  Paragraph,
  Link,
} from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import { DEFAULT_CONTENT_NODE } from '../../constants';

const aboutContainerStyles = {
  width: '80%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  borderRadis: '3px',
};

class SocialContent extends React.Component {
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
          title="Like, Follow, Chat, Laugh with Us"
          onCloseComplete={this.onClose}
          confirmLabel="Back to Home"
        >
          <div>
            <Pane>
              <Alert
                intent="none"
                title="Bitfaced on Facebook"
                marginBottom={12}
              >
                <Paragraph>
                  <Link href="https://facebook.com/bitfacedgames">Facebook Page</Link>
                </Paragraph>

                <Link href="https://facebook.com/pages/bitfacedgames">Facebook Group</Link>
              </Alert>
              <Alert
                intent="none"
                title="YouTube"
                marginBottom={12}
              />
              <Alert
                intent="none"
                title="Twitch"
                marginBottom={12}
              />
              <Alert
                intent="none"
                title="Subcribe to the podcast"
              >
  itunes
  pipaa
  onemas
              </Alert>
            </Pane>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default SocialContent;
