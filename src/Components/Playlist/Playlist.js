import React from 'react';
import ReactDOM from 'react-dom';

import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={`NEW Playlist`} />
        <a className="Playlist-save">SAVE TO DEEZER</a>
      </div>
    )
  }
}
