import React from 'react';
import { Dialog, Heading } from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import { DEFAULT_CONTENT_NODE } from '../../constants';

const aboutContainerStyles = {
  width: '80%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  borderRadis: '3px',
};

class ContactContent extends React.Component {
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
          title="Contact Bitfaced"
          onCloseComplete={this.onClose}
          confirmLabel="Back to Home"
        >
          <div>
            <Heading size={300}>
              If you need to contact Bitfaced, please email eric@bitfaced.com.
            </Heading>

            <Heading size={300} marginTop={20} marginBottom={20}>
              You can message us on Facebook, as well.
            </Heading>
            <iframe title="fb-message" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbitfacedgames%2F&tabs=messages&width=300&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1629881623992316" width="300" height="350" scrolling="no" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default ContactContent;
