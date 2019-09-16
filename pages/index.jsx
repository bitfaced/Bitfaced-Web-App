import React from 'react';
import ReactGA from 'react-ga';
import fetch from 'isomorphic-unfetch';
import { PropTypes } from 'prop-types';

import Layout from '../components/Layout';
import ContentContainer from '../components/content/ContentContainer';
import settings from '../utilities/siteSettings';

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch(settings.URL_PODCAST_LATEST);
    const data = await res.json();

    const result = await fetch(settings.URL_PODCAST_LIST);
    const episodes = await result.json();

    return {
      latestPodcast: data,
      episodes,
    };
  }

  static propTypes = {
    latestPodcast: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
    episodes: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })),
  };

  static defaultProps = {
    latestPodcast: {
      title: '',
      content: '',
    },
    episodes: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      activeContent: settings.DEFAULT_CONTENT,
      listHeight: 0,
      imagePosition: '210px',
    };

    ReactGA.initialize('UA-83285751-1');
  }

  onContentChange = (newContentState) => {
    this.setState({
      activeContent: newContentState,
    });
  };

  togglePlayList = () => {
    const { listHeight, imagePosition } = this.state;
    this.setState({
      listHeight: listHeight === 0 ? 240 : 0,
      imagePosition: imagePosition === '210px' ? '450px' : '210px',
    });
  };

  render() {
    const {
      activeContent,
      listHeight,
      imagePosition,
    } = this.state;

    const {
      latestPodcast,
      episodes,
    } = this.props;

    return (
      <Layout
        onContentChange={this.onContentChange}
        latestPodcast={latestPodcast}
        episodes={episodes}
        listHeight={listHeight}
        togglePlayList={this.togglePlayList}
      >
        <ContentContainer
          activeContent={activeContent}
          onContentChange={this.onContentChange}
          imagePosition={imagePosition}
        />
      </Layout>
    );
  }
}

export default Index;
