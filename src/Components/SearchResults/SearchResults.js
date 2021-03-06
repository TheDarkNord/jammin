import React from 'react';
import './SearchResults.css';
import { TrackList } from '../TrackList/TrackList';

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <TrackList isRemoval={false} tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    );
  }
}
