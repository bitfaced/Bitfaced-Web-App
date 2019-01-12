import React from 'react';
import ReactGA from 'react-ga';
import fetch from 'isomorphic-unfetch';
import { PropTypes } from 'prop-types';

import Layout from '../components/Layout';
import ContentContainer from '../components/content/ContentContainer';
import { DEFAULT_CONTENT_NODE } from '../constants';

const url = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:3000/api/podcast/latest'
  : 'http://ec2-52-14-244-30.us-east-2.compute.amazonaws.com/api/podcast/latest';

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch(url);
    const data = await res.json();

    return {
      latestPodcast: data,
    };
  }

  static propTypes = {
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

    this.state = {
      activeContent: DEFAULT_CONTENT_NODE,
    };

    ReactGA.initialize('UA-83285751-1');
    ReactGA.pageview('Home Page');
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
    } = this.props;

    return (
      <Layout
        onContentChange={this.onContentChange}
        latestPodcast={latestPodcast}
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
