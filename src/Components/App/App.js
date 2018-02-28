import React from 'react';
import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

// import { Deezer } from'../../util/Deezer';

//Please note, due to lack of support of SPOTIFY in South africa, I tried using a substitue called Deezer. Unfortunately, I was unable to get the dezired result.
//I have consulted with the team members of Codecademy, and they assured me that if I use the approach recommended by Codecademy and submit, I will not be penalised
//and the moderators will take into consideration the disadvantage I had to face. I have however included the Deezer approach as point of reference.

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
    // this.searchDeezer = this.searchDeezer.bind(this);
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

  // savePlaylist(){
  //   const trackURI = this.state.playlistTracks.map(trackURI =>{
  //     return {trackID: trackURI}
  //   })
  //   return Deezer.savePlaylist(this.state.playlistName, trackURI);
  // }

  savePlaylist(){
    const trackURI = this.state.playlistTracks.map(trackURI => {
      return {trackID: trackURI}
    })
    return Spotify.savePlaylist(this.state.PlaylistName, trackURI)
  }

  // searchDeezer(title) {
  //   // Deezer.searchDeezer(title);
  //   var Deezer = require('deezer-node-api');
  //   var dz = new Deezer();
  //   var track = title;
  //   console.log(track);
  //   let response;
  //
  //
  //   //When called in Deezer.js, the response is a promise, due to asynchronous operation
  //   return dz.findTracks(track).then(function(result){
  //   let response = result;
  //   console.log(response.data);
  //   console.log(this.state.searchResults);
  //   response = response.data;
  //   // this.setState({searchResults: response});
  //   });
  // }

  searchSpotify(title){
    const result = Spotify.searchSpotify(title)
    this.setState({searchResults: result});
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
