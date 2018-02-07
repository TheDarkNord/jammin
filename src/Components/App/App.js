import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlistTracks: [{
        id: '54',
        artist: 'Metallica',
        name: 'The Extacy of Gold',
        album: 'S&M'
      },
      {
        id: '8775',
        artist: 'No Doubt',
        name: 'Im just a girl',
        album: 'Tragic kingdom'
      },
      {
        id: '9856',
        artist: 'Don Broco',
        name: 'Everybody',
        album: 'Not released'
      }],
      searchResults: [{
        id: '1',
        artist: 'Foo Fighters',
        name: 'Rope',
        album: 'Wasting light'
      },
      {
        id: '2',
        artist: 'Pantera',
        name: 'Cowboys from hell',
        album: 'Reinventing hell'
      },
      {
        id: '3',
        artist: 'Roxette',
        name: 'Joyride',
        album: 'Joyride'
      }],
      playlistName: 'New Playlist'
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track){
    const tracklist = this.state.playlistTracks;
    for (let playlistIndex = 0; playlistIndex < tracklist.length; playlistIndex++){
      if (track.id === tracklist[playlistIndex].id){
        alert('Track already in playlist');
      } else {
        this.setState({playlistTracks: tracklist.push(track)})
      }
    }
  }

  removeTrack(track){
    const trackList = this.state.playlistTracks;
    for (let playlistIndex = 0; playlistIndex < trackList.length; playlistIndex++){
      if (track.id === trackList[playlistIndex].id){
        this.setState(trackList.splice(playlistIndex, 1))
      }
    }
  }

  updatePlaylistName(newName){
    const name = this.state.playlistName;
    this.setState({playlistName: newName});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
