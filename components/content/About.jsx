import React from 'react';
import {
  Dialog,
  Avatar,
  Pane,
  Paragraph,
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
          <Pane
            minHeight={120}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="default"
            elevation={2}
            padding={8}
            marginBottom={8}
          >
            <Avatar isSolid color="purple" name="Bit Faced" size={60} />
            <Paragraph size={500} padding={4}>
              <Heading is="h3">Bitfaced</Heading>
              Test Test TEst ehwjj wqejjhe jweqhfqjkwe qwjehjqe jewfh
              qwbfhqwhjfbjhefbqhjb hgfehqg qhefhjqwfhg qhwegfhfqgw fqef
              qwehjqwejjhqkjhjehjhqjhwfhejhjfhqjhf hfewhjqejkhewqjhjqhwfe
            </Paragraph>
          </Pane>

          <Pane
            minHeight={120}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="default"
            elevation={2}
            padding={8}
            marginBottom={8}
          >
            <Avatar isSolid name="Eric Hollis" size={60} />
            <Paragraph size={500} padding={4}>
              <Heading is="h3">Eric G. Hollis</Heading>
              Test Test TEst ehwjj wqejjhe jweqhfqjkwe qwjehjqe jewfh
              qwbfhqwhjfbjhefbqhjb hgfehqg qhefhjqwfhg qhwegfhfqgw fqef
              qwehjqwejjhqkjhjehjhqjhwfhejhjfhqjhf hfewhjqejkhewqjhjqhwfe
            </Paragraph>
          </Pane>

          <Pane
            minHeight={120}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="default"
            elevation={2}
            padding={8}
            marginBottom={8}
          >
            <Avatar isSolid name="Tyler Glaze" size={60} />
            <Paragraph size={500} padding={4}>
              <Heading is="h3">Tyler R. Glaze</Heading>
              Test Test TEst ehwjj wqejjhe jweqhfqjkwe qwjehjqe jewfh
              qwbfhqwhjfbjhefbqhjb hgfehqg qhefhjqwfhg qhwegfhfqgw fqef
              qwehjqwejjhqkjhjehjhqjhwfhejhjfhqjhf hfewhjqejkhewqjhjqhwfe
            </Paragraph>
          </Pane>

          <Pane
            minHeight={120}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="default"
            elevation={2}
            padding={8}
            marginBottom={8}
          >
            <Avatar isSolid color="yellow" name="Rebecca Somthing" size={60} />
            <Paragraph size={500} padding={4}>
              <Heading is="h3">Rebecca Something</Heading>
              Test Test TEst ehwjj wqejjhe jweqhfqjkwe qwjehjqe jewfh
              qwbfhqwhjfbjhefbqhjb hgfehqg qhefhjqwfhg qhwegfhfqgw fqef
              qwehjqwejjhqkjhjehjhqjhwfhejhjfhqjhf hfewhjqejkhewqjhjqhwfe
            </Paragraph>
          </Pane>

        </Dialog>
      </div>
    );
  }
}

export default AboutContent;
