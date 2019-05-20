import React from 'react';
import ReactGA from 'react-ga';
import fetch from 'isomorphic-unfetch';
import { PropTypes } from 'prop-types';

import Layout from '../components/Layout';
import ContentContainer from '../components/content/ContentContainer';
import settings from '../utilities/siteSettings';

const episodeLatestUrl = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:3000/api/podcast/latest'
  : 'http://bitfaced.com/api/podcast/latest';

const episodeListUrl = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:3000/api/podcast/list'
  : 'http://bitfaced.com/api/podcast/list';


class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch(episodeLatestUrl);
    const data = await res.json();

    const result = await fetch(episodeListUrl);
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
    };

    ReactGA.initialize('UA-83285751-1');
  }

  onContentChange = (newContentState) => {
    this.setState({
      activeContent: newContentState,
    });
  };

  render() {
    const {
      activeContent,
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
      >
        <ContentContainer
          activeContent={activeContent}
          onContentChange={this.onContentChange}
        />
      </Layout>
    );
  }
}

export default Index;
