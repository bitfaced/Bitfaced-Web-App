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
import settings from '../../utilities/siteSettings';

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

    onContentChange(settings.DEFAULT_CONTENT);
  }

  render() {
    return (
      <div style={aboutContainerStyles}>
        <Dialog
          isShown
          hasCancel={false}
          title="Like and Laugh with Bitfaced"
          onCloseComplete={this.onClose}
          confirmLabel="Back to Home"
        >
          <div>
            <Pane>
              <Alert
                intent="none"
                hasIcon={false}
                marginBottom={12}
              >
                <Link href="https://www.facebook.com/bitfacedgames/" target="_blank">
                  <Avatar
                    src="https://s3.us-east-2.amazonaws.com/bfpc/icons/Facebook-2-512.png"
                    color="teal"
                    padding="5px"
                    name="Facebook"
                    size={40}
                  />
                  <Heading size={400} marginTop={-28} marginBottom={10} marginLeft={45}>
                    Like our Facebook Page
                  </Heading>
                </Link>
              </Alert>
              <Alert
                intent="none"
                hasIcon={false}
                marginBottom={12}
              >
                <Link href="https://www.youtube.com/channel/UCBPMUNC5-3hcah9hcqueybg" target="_blank">
                  <Avatar
                    src="https://s3.us-east-2.amazonaws.com/bfpc/icons/39_youtube_b-512.png"
                    color="red"
                    padding="5px"
                    name="Youtube"
                    size={40}
                  />
                  <Heading size={400} marginTop={-28} marginBottom={10} marginLeft={45}>
                    Subcribe to Bitfaced Youtube
                  </Heading>
                </Link>
              </Alert>
              <Alert
                intent="none"
                hasIcon={false}
                marginBottom={12}
              >
                <Link href="https://www.twitch.tv/bitfacedgames" target="_blank">
                  <Avatar
                    src="https://s3.us-east-2.amazonaws.com/bfpc/icons/580b57fcd9996e24bc43c540.png"
                    color="purple"
                    padding="5px"
                    name="Twitch"
                    size={40}
                  />
                  <Heading size={400} marginTop={-28} marginBottom={10} marginLeft={45}>
                    Come Watch on Twitch
                  </Heading>
                </Link>
              </Alert>
              <Alert
                intent="none"
                hasIcon={false}
                marginBottom={12}
              >
                <Link href="https://itunes.apple.com/us/podcast/bitfaced/id1002954314?mt=2&app=podcast" target="_blank">
                  <Avatar
                    src="https://s3.us-east-2.amazonaws.com/bfpc/icons/1200px-ITunes_logo.svg.png"
                    color="blue"
                    padding="5px"
                    name="Twitch"
                    size={40}
                  />
                  <Heading size={400} marginTop={-28} marginBottom={10} marginLeft={45}>
                    Subcribe and Listen on iTunes
                  </Heading>
                </Link>
              </Alert>
            </Pane>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default SocialContent;
