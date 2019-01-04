import React from 'react';
import { Dialog } from 'evergreen-ui';
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
          title="Contact BitFaced"
          onCloseComplete={this.onClose}
          confirmLabel="Back to Home"
        >
          <div>
            <iframe title="fb-page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbitfacedgames%2F&tabs=messages&width=311&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=1629881623992316" width="311" height="500" scrolling="no" allowTransparency="true" allow="encrypted-media" />
          </div>

        </Dialog>
      </div>
    );
  }
}

export default ContactContent;
