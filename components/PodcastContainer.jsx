import React from 'react';
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
      currentEpisodeLink: this.getLatestEpisode().link,
    };
  }

  getLatestEpisode() {
    const { episodes } = this.props;
    return episodes[0];
  }

  updatePlayer = (newEpisode) => {
    this.setState({
      currentEpisodeLink: newEpisode.link,
    });
  }

  render() {
    const { currentEpisodeLink } = this.state;
    const { episodes } = this.props;
    return (
      <div>
        <PodcastPlayer embedUrl={currentEpisodeLink} />
        <PodcastList episodes={episodes} onEpisodeSelect={this.updatePlayer} />
      </div>
    );
  }
}

export default PodcastContainer;
