import React from 'react';
import { Button } from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import PodcastPlayer from './PodcastPlayer';
import PodcastList from './PodcastList';

class PodcastContainer extends React.Component {
  static propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentEpisodeLink: '',
    };
  }

  componentDidMount() {
    this.setState({
      currentEpisodeLink: this.getEpisodeToPlay().link,
    });
  }

  getEpisodeToPlay() {
    // eslint-disable-next-line react/prop-types
    const { episodes } = this.props;
    let matchingEpisode = null;
    // eslint-disable-next-line no-undef
    const lastPlayedTitle = localStorage.getItem('LAST_PLAYED');
    if (lastPlayedTitle) {
      (episodes || []).some((episode) => {
        if (episode.title === lastPlayedTitle) {
          matchingEpisode = episode;
          return true;
        }
        return false;
      });

      if (matchingEpisode !== null) {
        return matchingEpisode;
      }
    }
    return episodes[0];
  }

  updatePlayer = (newEpisode) => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('LAST_PLAYED', newEpisode.title);
    this.setState({
      currentEpisodeLink: newEpisode.link,
    });
  }

  goToLatest = () => {
    const { episodes } = this.props;
    // eslint-disable-next-line no-undef
    localStorage.removeItem('LAST_PLAYED');
    this.setState({
      currentEpisodeLink: episodes[0].link,
    });
  }

  render() {
    const { currentEpisodeLink } = this.state;
    const { episodes } = this.props;
    return (
      <div>
        <PodcastPlayer embedUrl={currentEpisodeLink} />
        <Button appearance="minimal" onClick={this.goToLatest}>Go to Latest Episode</Button>
        <PodcastList episodes={episodes} onEpisodeSelect={this.updatePlayer} />
      </div>
    );
  }
}

export default PodcastContainer;
