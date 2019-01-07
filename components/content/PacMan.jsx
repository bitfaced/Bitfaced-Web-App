import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Dialog,
} from 'evergreen-ui';
import { DEFAULT_CONTENT_NODE } from '../../constants';


class PacManContent extends React.Component {
  static propTypes = {
    onContentChange: PropTypes.func.isRequired,
  }

  static iframeStyles = {
    height: '-webkit-fill-available',
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
      <Dialog
        isShown
        hasHeader
        hasFooter={false}
        width="100%"
        minHeightContent="400px"
        onCloseComplete={this.onClose}
        onCancel={this.onClose}
      >
        <iframe width="100%" style={PacManContent.iframeStyles} title="Bitfaced Pacman Game" src="http://ec2-18-220-163-76.us-east-2.compute.amazonaws.com/index.html" />
      </Dialog>
    );
  }
}

export default PacManContent;
