import React from 'react';
import { PropTypes } from 'prop-types';
import {
  CornerDialog,
} from 'evergreen-ui';
import fetch from 'isomorphic-unfetch';

import { DEFAULT_CONTENT_NODE } from '../../constants';


class PacManContent extends React.Component {
  static propTypes = {
    onContentChange: PropTypes.func.isRequired,
  }

  static iframeStyles = {
    height: '-webkit-fill-available',
    overflow: 'auto',
    overscrollBehavior: 'contain',
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.getHighScores();
  }

  getHighScores = () => fetch('http://localhost:3000/api/pacman/highscore')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }

      return response.json();
    })
    .then((stories) => {
      this.setState({
        highScores: stories,
      });
    });

  onClose = () => {
    const { onContentChange } = this.props;

    onContentChange(DEFAULT_CONTENT_NODE);
  }

  render() {
    const {
      highScores,
    } = this.state;

    const title = typeof highScores !== 'object' ? '' : `High Score: ${highScores[0].score} by ${highScores[0].name}`;

    return (
      <CornerDialog
        isShown
        title={title}
        hasHeader
        hasFooter={false}
        width="100%"
        minHeightContent="100%"
        onCloseComplete={this.onClose}
        onCancel={this.onClose}
        style={PacManContent.iframeStyles}
        containerProps={{
          style: {
            height: '100%',
            zIndex: 20,
            width: '100%',
            left: '0px',
            bottom: '0px',
            overscrollBehavior: 'contain',
          },
        }}
      >
        <iframe width="100%" style={PacManContent.iframeStyles} title="Bitfaced Pacman Game" src="http://ec2-18-220-163-76.us-east-2.compute.amazonaws.com/index.html" />
      </CornerDialog>
    );
  }
}

export default PacManContent;
