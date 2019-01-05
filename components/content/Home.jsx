import React from 'react';
import MediaQuery from 'react-responsive';

const logoStylesPortrait = {
  width: '100%',
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
  width: '60%',
  marginLeft: '20%',
  position: 'absolute',
  bottom: '215px',
};

class HomeContent extends React.Component {
  static LOGO_URL = 'https://s3.us-east-2.amazonaws.com/bitfaced/logo.png';

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <MediaQuery orientation="portrait">
          <img
            id="bitfaced-logo-img"
            style={logoStylesPortrait}
            alt="BitFaced Podcast Logo with Eric and Tyler"
            src={HomeContent.LOGO_URL}
          />
        </MediaQuery>
        <MediaQuery orientation="landscape" maxDeviceHeight={767}>
          <img
            id="bitfaced-logo-img"
            style={logoStylesLandscape}
            alt="BitFaced Podcast Logo with Eric and Tyler"
            src={HomeContent.LOGO_URL}
          />
        </MediaQuery>
        <MediaQuery orientation="landscape" minDeviceHeight={768}>
          <img
            id="bitfaced-logo-img"
            style={logoStylesBigLandscape}
            alt="BitFaced Podcast Logo with Eric and Tyler"
            src={HomeContent.LOGO_URL}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default HomeContent;
