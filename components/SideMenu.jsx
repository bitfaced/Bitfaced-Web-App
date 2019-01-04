import React from 'react';
import {
  SideSheet,
  Paragraph,
  Position,
  IconButton,
} from 'evergreen-ui';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

    toggleSideMenuOpen = () => {
      this.setState = prevState => ({ isOpened: !prevState.isOpened });
    };

    render() {
      const { isOpened } = this.state;

      return (
        <React.Fragment>
          <SideSheet
            position={Position.TOP}
            isShown={isOpened}
            onCloseComplete={this.toggleSideMenuOpen}
          >
            <Paragraph margin={10}>Home</Paragraph>
            <Paragraph margin={10}>About Bitfaced</Paragraph>
            <Paragraph margin={10}>Contact Bitfaced</Paragraph>
          </SideSheet>
          <IconButton
            icon="menu"
            onClick={this.toggleSideMenuOpen}
          />
        </React.Fragment>
      );
    }
}

export default SideMenu;
