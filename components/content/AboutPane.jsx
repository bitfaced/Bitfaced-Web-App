import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Pane,
  Avatar,
  Paragraph,
  Text,
} from 'evergreen-ui';

class AboutPane extends React.Component {
  static propTypes = {
    displayName: PropTypes.string,
    avatarName: PropTypes.string,
    color: PropTypes.string,
    content: PropTypes.node,
  };

  static defaultProps = {
    displayName: 'Bittie Bitfaced',
    avatarName: 'Bytie Bytfaced',
    color: 'yellow',
    content: 'Bittie Bitfaced was once.....blah..blah..blah',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      displayName,
      avatarName,
      color,
      content,
    } = this.props;

    return (
      <Pane
        minHeight={150}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        elevation={2}
        padding={16}
        marginBottom={8}
        overflow="hidden"
      >
        <Avatar height={40} width={40} isSolid color={color} name={avatarName} size={40} />
        <Paragraph size={400} padding={8}>
          <Text size={500}>{displayName}</Text>
          <br />
          {content}
        </Paragraph>
      </Pane>
    );
  }
}

export default AboutPane;
