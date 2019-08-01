import React from 'react';
import ReactGA from 'react-ga';
import { PropTypes } from 'prop-types';
import {
  CONTENT_NODES,
} from '../../constants';
import settings from '../../utilities/siteSettings';

class ContentContainer extends React.Component {
  static propTypes = {
    activeContent: PropTypes.string,
    onContentChange: PropTypes.func.isRequired,
    imagePosition: PropTypes.string.isRequired,
  };

  static defaultProps = {
    activeContent: settings.DEFAULT_CONTENT,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getContent = (contentKey) => {
    const { onContentChange, imagePosition } = this.props;

    ReactGA.pageview(contentKey);
    return CONTENT_NODES[contentKey]
      ? CONTENT_NODES[contentKey].component(onContentChange, imagePosition)
      : CONTENT_NODES.home.component(onContentChange, imagePosition);
  }

  render() {
    const { activeContent } = this.props;
    return (
      <div>{this.getContent(activeContent)}</div>
    );
  }
}

export default ContentContainer;
