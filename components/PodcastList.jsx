import React from 'react';
import { PropTypes } from 'prop-types';
import { Table } from 'evergreen-ui';

const HEIGHT_EPISODE_LIST = 240;

class PodcastList extends React.Component {
  static propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })).isRequired,
    onEpisodeSelect: PropTypes.func.isRequired,
  };

  getLatestEpisode() {
    const { episodes } = this.props;
    return episodes[episodes.length - 1];
  }

  renderEpisodeList() {
    const { episodes, onEpisodeSelect } = this.props;
    const rows = (episodes || []).map(episode => (
      <Table.Row
        key={episode.link}
        isSelectable
        onSelect={() => {
          onEpisodeSelect(episode);
        }}
      >
        <Table.TextCell>
          {episode.title}
        </Table.TextCell>
      </Table.Row>
    ));

    return rows;
  }

  render() {
    return (
      <Table background="tint2">
        <Table.Body height={HEIGHT_EPISODE_LIST}>
          { this.renderEpisodeList() }
        </Table.Body>
      </Table>
    );
  }
}

export default PodcastList;
