import React from 'react';
import './TrackList.css';

import { Track } from '../Track/Track';

export class TrackList extends React.Component {
  render() {
    let tracks;
    if(this.props.tracks !== undefined){
      tracks = this.props.tracks.map(track => {
        return <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
      })
    } else {
      return
    }


    return (
      <div className="TrackList">
        {tracks}
      </div>
    );
  }
}
