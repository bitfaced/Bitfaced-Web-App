import React from 'react';
import { css } from 'glamor';
import Transition from 'react-transition-group/Transition';
import {
  Alert,
  Heading,
} from 'evergreen-ui';
import { PropTypes } from 'prop-types';

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
  position: 'relative',
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
  static propTypes = {
    latestPodcast: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  }

  static defaultProps = {
    latestPodcast: {
      title: '',
      content: '',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      isShown: true,
      height: 0,
      duration: 1000,
      zIndex: 19,
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

  getTitle = () => {
    const {
      latestPodcast,
    } = this.props;

    return (!latestPodcast.title) ? ' ' : ` ${latestPodcast.title.trim()}, `;
  };

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

    const title = this.getTitle();

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
              marginLeft: '50px',
              position: 'absolute',
              width: 'calc(100% - 100px)',
              top: '7px',
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
                zIndex={19}
                position="relative"
                width="100%"
                marginLeft="auto"
                marginRight="auto"
                hasIcon={false}
                isRemoveable
                onRemove={this.onRemove}
              >
                <Heading size={300} marginTop={5}>
                  Check out the latest podcast,
                  {title}
                  and find us on social media while listening,
                  also try poking at our hearts,
                  you might make a game of it.
                </Heading>
              </Alert>
            </div>
          </div>
        )}
      </Transition>
    );
  }
}
