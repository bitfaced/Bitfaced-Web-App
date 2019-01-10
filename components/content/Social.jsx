import React from 'react';
import {
  Dialog,
  Alert,
  Pane,
  Link,
  Avatar,
  Heading,
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
                intent="success"
                hasIcon={false}
                marginBottom={12}
              >
                <Link href="https://facebook.com">
                  <Avatar
                    src="https://cdn2.iconfinder.com/data/icons/social-18/512/Facebook-2-512.png"
                    color="teal"
                    padding="5px"
                    name="Facebook"
                    size={40}
                  />
                  <Heading size={400}>
                    Like our Facebook Page!
                  </Heading>
                </Link>
              </Alert>
              <Alert
                intent="success"
                hasIcon={false}
                marginBottom={12}
              >
                <Link href="https://facebook.com">
                  <Avatar
                    src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/39_youtube_b-512.png"
                    color="red"
                    padding="5px"
                    name="Youtube"
                    size={40}
                  />
                  <Heading size={400}>
                    Subcribe to our youtube channel!
                  </Heading>
                </Link>
              </Alert>
              <Alert
                intent="success"
                hasIcon={false}
                marginBottom={12}
              >
                <Link href="https://twitch.com">
                  <Avatar
                    src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png"
                    color="purple"
                    padding="5px"
                    name="Twitch"
                    size={40}
                  />
                  <Heading size={400}>
                    Come watch or game with us on Twitch
                  </Heading>
                </Link>
              </Alert>
              <Alert
                intent="success"
                hasIcon={false}
                marginBottom={12}
              >
                <Avatar
                  src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/podcast-2-512.png"
                  color="orange"
                  padding="5px"
                  name="Twitch"
                  size={40}
                />
                <Heading size={400}>
                  Subcribe to the Bitfaced Podcast
                </Heading>
                <a href="https://itunes.apple.com/us/podcast/bitfaced/id1002954314?mt=2&app=podcast">Itunes</a>
                <a href="https://shows.pippa.io/bitfaced">Pippa</a>
              </Alert>
            </Pane>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default SocialContent;
