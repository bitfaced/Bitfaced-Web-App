import React from 'react';
import { PropTypes } from 'prop-types';
import { Table } from 'evergreen-ui';

class PodcastList extends React.Component {
  static propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })).isRequired,
    onEpisodeSelect: PropTypes.func.isRequired,
    listHeight: PropTypes.number.isRequired,
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
    const { listHeight } = this.props;
    return (
      <Table background="tint2">
        <Table.Body transition="0.3s ease-in-out all" height={listHeight}>
          { this.renderEpisodeList() }
        </Table.Body>
      </Table>
    );
  }
}

export default PodcastList;
