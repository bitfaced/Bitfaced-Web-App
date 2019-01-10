import React from 'react';
import { Dialog, Heading, Link } from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import { DEFAULT_CONTENT_NODE } from '../../constants';

const aboutContainerStyles = {
  width: '80%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  borderRadis: '3px',
};

class DevelopContent extends React.Component {
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
          title="Develop Bitfaced.com With Us"
          onCloseComplete={this.onClose}
          confirmLabel="Back to Home"
        >
          <div>
            <Heading size={300}>
              Help us develop, innovate, and maintain Bitfaced.com!
            </Heading>

            <Heading size={300} marginTop={20}>
              Bitfaced.com is an open sourced community driven web
              application built using Node.js, React, Express, Next.js,
              and Evergreen-UI and hosted with Amazon AWS Free-tier tech.
            </Heading>

            <Heading size={300} marginTop={20} marginBottom={20}>
              We encourage and praise community contributions,
              please learn more about the contributing process below.
            </Heading>

            <Link target="_blank" href="http://help-develop.bitfaced.com" color="green">
              <Heading size={300}>
                Visit
                <b> help-develop.bitfaced.com </b>
                to learn more!
              </Heading>
            </Link>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default DevelopContent;
