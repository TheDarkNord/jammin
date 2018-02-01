import React from 'react';
import './TrackList.css';

import { Track } from '../Track/Track';

const currentTracks = [
  {artist: 'Metallica',
  title: 'The Extacy of gold',
  album: 'S&M'
  },
  {artist: 'Don Broco',
  title: 'Everybody',
  album: 'Unknown'
  },
  {artist: 'He Is Legend',
  title: 'Air Raid',
  album: 'Few'
  }
];

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        <ul>
          <li className="Track">{currentTracks[0].title}</li>
          <li className="Track">{currentTracks[1].title}</li>
          <li className="Track">{currentTracks[2].title}</li>
        </ul>
      </div>
    )
  }
}
