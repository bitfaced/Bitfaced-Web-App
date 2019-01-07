import React from 'react';
import { css } from 'glamor';
import Transition from 'react-transition-group/Transition';
import { Alert } from 'evergreen-ui';

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)',
};

const ANIMATION_DURATION = 240;

const openAnimation = css.keyframes('openAnimation', {
  from: {
    opacity: 0,
    transform: 'translateY(-120%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1,
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0,
  },
});

const animationStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 0,
  transition: `all ${ANIMATION_DURATION}ms ${animationEasing.deceleration}`,
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.spring
    } both`,
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} 120ms ${animationEasing.acceleration} both`,
  },
});

export default class Toast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: true,
      height: 0,
      duration: 120,
      zIndex: 10,
    };
  }

  close = () => {
    this.clearCloseTimer();
    this.setState({
      isShown: false,
    });
  }

  startCloseTimer = () => {
    const {
      duration,
    } = this.state;

    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration * 1000);
    }
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  handleMouseEnter = () => {
    this.clearCloseTimer();
  }

  handleMouseLeave = () => {
    this.startCloseTimer();
  }

  onRef = (ref) => {
    if (ref === null) return;

    const { height } = ref.getBoundingClientRect();

    this.setState({
      height,
    });
  }

  onRemove = () => {
    this.setState({
      isShown: false,
    });
  }

  render() {
    const {
      isShown,
      height,
      zIndex,
    } = this.state;

    return (
      <Transition
        appear
        unmountOnExit
        timeout={ANIMATION_DURATION}
        in={isShown}
        onExited={this.onRemove}
      >
        {state => (
          <div
            data-state={state}
            className={animationStyles}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{
              height,
              zIndex,
              marginBottom: isShown ? 0 : -height,
              position: 'relative',
            }}
          >
            <div ref={this.onRef} style={{ padding: 8, zIndex: 10 }}>
              <Alert
                flexShrink={0}
                appearance="card"
                elevation={3}
                intent="none"
                title="Welcome to Bitfaced.com"
                pointerEvents="all"
                zIndex={10}
                width="calc(100% - 30px)"
                marginLeft="auto"
                marginRight="auto"
                hasIcon={false}
                isRemoveable
                onRemove={this.onRemove}
              >
                Please check out the latest podcast, find us on social media,
                and feel free to click around. You never know what kind of fun you might find.
              </Alert>
            </div>
          </div>
        )}
      </Transition>
    );
  }
}
