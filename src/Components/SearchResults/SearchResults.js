import React from 'react';
import './SearchResults.css';
import { TrackList } from '../TrackList/TrackList';

export class SearchResults extends React.Component {
  render() {
    const tracks = (this.props.searchResult);
    return (
      <div className="SearchResults">
        <TrackList tracks={this.tracks} />
      </div>
    );
  }
}
