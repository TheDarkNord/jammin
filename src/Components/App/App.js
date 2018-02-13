import React from 'react';
import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

import { Deezer } from'../../util/Deezer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlistTracks: [{
        id: 1,
        title: 'Hello',
        artist: 'Lucas Rossi',
        album: 'Unknown'
      },
      {
        id: 2,
        title: 'Everybody',
        artist: 'Don Broco',
        album: 'Unknown'
      },
      {
        id: 3,
        title: 'Hello',
        artist: 'Adelle',
        album: '24'
      },],
      searchResults: [{
        id: 17,
        title: 'Doomed',
        artist: 'Bring me the horizon',
        album: 'Live at Albert Hall'
      },
      {
        id: 87,
        title: 'The Extacy of gold',
        artist: 'Metallica',
        album: 'S&M'
      },
      {
        id: 3,
        title: 'Hello',
        artist: 'Adelle',
        album: '24'
      },],
      playlistName: 'New Playlist'
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.searchDeezer = this.searchDeezer.bind(this);
  }

  addTrack(track){
    const tracklist = this.state.playlistTracks;
    let shouldAdd = true;
    for (let tracklistIndex = 0; tracklistIndex < tracklist.length; tracklistIndex++){
      if (track.id === tracklist[tracklistIndex].id){
        shouldAdd = false;
        alert('Track already in playlist');
        console.log(tracklist[tracklistIndex].id)
        console.log(track.id)
        return
      }
    }
    if(shouldAdd === true) {
      tracklist.push(track);
      this.setState({playlistTracks: tracklist})
    }
  }

  removeTrack(track){
    const trackList = this.state.playlistTracks;
    for (let tracklistIndex = 0; tracklistIndex < trackList.length; tracklistIndex++){
      if (track.id === trackList[tracklistIndex].id){
        this.setState(trackList.splice(tracklistIndex, 1))
        console.log(this.state.playlistTracks)
      }
    }
  }

  updatePlaylistName(newName){
    this.setState({playlistName: newName});
  }

  savePlaylist(){
    const trackURI = this.state.playlistTracks.map(trackURI =>{
      return {trackID: trackURI}
    })
    return Deezer.savePlaylist(this.state.playlistName, trackURI);
  }

  searchDeezer(title) {
    return Deezer.searchDeezer(title).then(trackList => {
      this.setState({searchResults: trackList})
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.searchDeezer}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
