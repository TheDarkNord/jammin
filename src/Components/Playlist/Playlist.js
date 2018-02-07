import React from 'react';

import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e){
    const name = e.target.value;
    this.setState({playlistName: name})
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.playlistName} onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
        <a className="Playlist-save">SAVE TO DEEZER</a>
      </div>
    )
  }
}
