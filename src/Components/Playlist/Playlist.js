import React from 'react';

import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={`NEW PLAYLIST`} />
        <TrackList />
        <a className="Playlist-save">SAVE TO DEEZER</a>
      </div>
    )
  }
}
