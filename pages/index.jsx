import React from 'react';
import Layout from '../components/Layout';
import ContentContainer from '../components/content/ContentContainer';
import { DEFAULT_CONTENT_NODE } from '../constants';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContent: DEFAULT_CONTENT_NODE,
    };
  }

  onContentChange = (newContentState) => {
    this.setState({
      activeContent: newContentState,
    });
  };

  render() {
    const { activeContent } = this.state;

    return (
      <Layout
        onContentChange={this.onContentChange}
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
