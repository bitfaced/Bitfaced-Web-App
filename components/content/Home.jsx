/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import MediaQuery from 'react-responsive';
import { PropTypes } from 'prop-types';

const logoStylesPortrait = {
  width: '100%',
  position: 'absolute',
  bottom: '210px',
};

const logoStylesSmallPortrait = {
  width: '80%',
  marginLeft: '10%',
  position: 'absolute',
  bottom: '210px',
};

const logoStylesLandscape = {
  width: '20%',
  marginLeft: '40%',
  position: 'absolute',
  bottom: '215px',
};

const logoStylesBigLandscape = {
  width: '40%',
  marginLeft: '30%',
  position: 'absolute',
  bottom: '215px',
};

class HomeContent extends React.Component {
  static propTypes = {
    onContentChange: PropTypes.func.isRequired,
  }

  static LOGO_URL = 'https://s3.us-east-2.amazonaws.com/bitfaced/logo.png';

  constructor(props) {
    super(props);
    this.state = {};
  }

  onlogoClick = (e) => {
    console.log(e);
    const { onContentChange } = this.props;

    onContentChange('pacman');
  }


  render() {
    return (
      <div>
        <MediaQuery orientation="portrait" minDeviceWidth={500}>
          <img
            id="bitfaced-logo-img"
            style={logoStylesPortrait}
            alt="BitFaced Podcast Logo with Eric and Tyler"
            src={HomeContent.LOGO_URL}
            onClick={this.onlogoClick}
          />
        </MediaQuery>
        <MediaQuery orientation="portrait" maxDeviceWidth={501}>
          <img
            id="bitfaced-logo-img"
            style={logoStylesSmallPortrait}
            alt="BitFaced Podcast Logo with Eric and Tyler"
            src={HomeContent.LOGO_URL}
            onClick={this.onlogoClick}
          />
        </MediaQuery>
        <MediaQuery orientation="landscape" maxDeviceHeight={840} maxDeviceWidth={840}>
          <img
            id="bitfaced-logo-img"
            style={logoStylesLandscape}
            alt="BitFaced Podcast Logo with Eric and Tyler"
            src={HomeContent.LOGO_URL}
            onClick={this.onlogoClick}
          />
        </MediaQuery>
        <MediaQuery orientation="landscape" minDeviceWidth={841}>
          <img
            id="bitfaced-logo-img"
            style={logoStylesBigLandscape}
            alt="BitFaced Podcast Logo with Eric and Tyler"
            src={HomeContent.LOGO_URL}
            onClick={this.onlogoClick}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default HomeContent;
