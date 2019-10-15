import React from 'react';
import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

import { Spotify } from '../../util/Spotify';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlistTracks: [],
      searchResults: [],
      playlistName: 'New Playlist'
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.searchSpotify = this.searchSpotify.bind(this);
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
    const trackURI = this.state.playlistTracks.map(trackURI => {
      return {trackID: trackURI}
    })
    return Spotify.savePlaylist(this.state.PlaylistName, trackURI)
  }

  searchSpotify(title){
    const result = Spotify.search(title);
    console.log("Returned: ", result);
    this.setState({searchResults : result});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.searchSpotify}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
          <div>
            <p>Powered by:</p>
            <div className="deezerLogo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
