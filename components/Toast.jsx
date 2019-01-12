/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
      playedTitleMessage: false,
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

    return (!latestPodcast.title) ? '' : `${latestPodcast.title.trim()}`;
  };

  getContent = () => {
    const {
      latestPodcast,
    } = this.props;

    return (!latestPodcast.content) ? '' : `${latestPodcast.content}`;
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

  onTitleClick = () => {
    const {
      playedTitleMessage,
    } = this.state;

    if (!playedTitleMessage) {
      if (typeof window !== 'undefined' && window.SpeechSynthesisUtterance) {
        const string = `Welcome to Bitfaced, my bity bity bitches! Don't forget to checkout the latest podcast,${this.getTitle()}`;
        const msg = new window.SpeechSynthesisUtterance(string);
        msg.rate = 0.85;
        msg.pitch = -1;
        window.speechSynthesis.speak(msg);

        this.setState({
          playedTitleMessage: true,
        });
      }
    }
  };

  render() {
    const {
      isShown,
      height,
      zIndex,
    } = this.state;

    const title = this.getTitle();
    const content = this.getContent();

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
                title="Check out the latest Bitfaced podcast!"
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
                <div
                  onClick={this.onTitleClick}
                  onKeyPress={this.onTitleClick}
                  onTouchEnd={this.onTitleClick}
                >
                  <Heading size={200} marginTop={2}>
                    {title}
                  </Heading>
                </div>
                <Heading size={200} marginTop={2} width="105%">
                  {content}
                </Heading>
              </Alert>
            </div>
          </div>
        )}
      </Transition>
    );
  }
}
