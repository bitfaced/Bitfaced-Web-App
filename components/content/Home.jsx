/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import MediaQuery from 'react-responsive';
import { PropTypes } from 'prop-types';

const PORTRAIT_BOTTOM = '460px';
const PORTRAIT_LANDSCAPE = '455px';

const logoStylesPortrait = {
  width: '70%',
  marginLeft: '15%',
  position: 'absolute',
  bottom: PORTRAIT_BOTTOM,
};

const logoStylesSmallPortrait = {
  width: '50%',
  marginLeft: '25%',
  position: 'absolute',
  bottom: PORTRAIT_BOTTOM,
};

const logoStylesLandscape = {
  width: '20%',
  marginLeft: '40%',
  position: 'absolute',
  bottom: PORTRAIT_LANDSCAPE,
};

const logoStylesBigLandscape = {
  width: '30%',
  marginLeft: '35%',
  position: 'absolute',
  bottom: PORTRAIT_LANDSCAPE,
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

  onlogoClick = () => {
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
