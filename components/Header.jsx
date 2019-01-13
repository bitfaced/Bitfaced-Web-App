import React from 'react';
import PropTypes from 'prop-types';
import Meta from './Meta';
import SideMenu from './SideMenu';

const iconStyle = {
  padding: 15,
};

class Header extends React.Component {
  static propTypes = {
    onContentChange: PropTypes.func.isRequired,
    latestPodcast: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  };

  static defaultProps = {
    latestPodcast: {
      title: '',
      content: '',
    },
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      latestPodcast,
      onContentChange,
    } = this.props;

    return (
      <div style={iconStyle}>
        <Meta
          latestPodcast={latestPodcast}
        />
        <SideMenu
          onContentChange={onContentChange}
        />
      </div>
    );
  }
}

export default Header;
