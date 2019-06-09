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
    lastPlayedEpisode: PropTypes.string,
  };

  static defaultProps = {
    lastPlayedEpisode: undefined,
  }

  constructor(props) {
    super(props);
    this.state = {
      currentEpisodeLink: this.getEpisodeToPlay().link,
    };
  }

  getEpisodeToPlay() {
    // eslint-disable-next-line react/prop-types
    const { episodes, lastPlayedEpisode } = this.props;
    if (lastPlayedEpisode) {
      const titles = episodes.map(episode => episode.title);
      const episodeIndex = titles.findIndex(
        episodeName => episodeName === lastPlayedEpisode,
      );
      if (episodeIndex !== -1) {
        return episodes[episodeIndex];
      }
    }
    return episodes[0];
  }

  updatePlayer = (newEpisode) => {
    // eslint-disable-next-line no-undef
    document.cookie = `LAST_PLAYED=${newEpisode.title}`;
    this.setState({
      currentEpisodeLink: newEpisode.link,
    });
  }

  goToLatest = () => {
    const { episodes } = this.props;
    // eslint-disable-next-line no-undef
    document.cookie = 'LAST_PLAYED=""';
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
