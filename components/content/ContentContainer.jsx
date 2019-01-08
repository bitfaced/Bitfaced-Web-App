import React from 'react';
import { PropTypes } from 'prop-types';
import {
  DEFAULT_CONTENT_NODE,
  CONTENT_NODES,
} from '../../constants';

class ContentContainer extends React.Component {
  static propTypes = {
    activeContent: PropTypes.string,
    onContentChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    activeContent: DEFAULT_CONTENT_NODE,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getContent = (contentKey) => {
    const { onContentChange } = this.props;
    return CONTENT_NODES[contentKey] ? CONTENT_NODES[contentKey].component(onContentChange)
      : CONTENT_NODES.home.component(onContentChange);
  }

  render() {
    const { activeContent } = this.props;

    return (
      <div>{this.getContent(activeContent)}</div>
    );
  }
}

export default ContentContainer;
