import React from 'react';
import {
  SideSheet,
  Paragraph,
  Position,
  IconButton,
} from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import { CONTENT_NODES, noop } from '../constants';

class SideMenu extends React.Component {
    static propTypes = {
      onContentChange: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        isOpened: false,
        menuItems: this.menuItems(),
      };
    }

  onMenuItemClick = (e) => {
    const { onContentChange } = this.props;

    onContentChange(e.target.title);
    this.setState({
      isOpened: false,
    });
  }

  menuItems = () => Object.keys(CONTENT_NODES).map(
    content => (
      <Paragraph
        onClick={this.onMenuItemClick}
        margin={10}
        title={content}
        key={content}
      >
        {CONTENT_NODES[content].displayName}
      </Paragraph>
    ),
  );

  getNextToggleStatus = () => {
    const { isOpened } = this.state;

    return !isOpened;
  }

  toggleSideMenu = () => {
    const newStatus = this.getNextToggleStatus();

    this.setState({
      isOpened: newStatus,
    });
  };

  render() {
    const {
      isOpened,
      menuItems,
    } = this.state;

    const onCloseComplete = isOpened === false ? noop : this.toggleSideMenu;

    return (
      <React.Fragment>
        <SideSheet
          position={Position.TOP}
          isShown={isOpened}
          onCloseComplete={onCloseComplete}
        >
          {menuItems}
        </SideSheet>
        <IconButton
          icon="menu"
          onClick={this.toggleSideMenu}
        />
      </React.Fragment>
    );
  }
}

export default SideMenu;
