import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        id: '54',
        artist: 'Metallica',
        name: 'The Extacy of Gold',
        album: 'S&M'
      },
      {
        id: '654',
        artist: 'Bring me the Horizon',
        name: 'Doomed',
        album: 'Live at the Albert Hall'
      },
      {
        id: '9815',
        artist: 'Don Broco',
        name: 'Everybody',
        album: 'Unknown'
      }],
      searchResults: [{
        id: '1',
        artist: 'Foo Fighters',
        name: 'Rope',
        album: 'Wasting light'
      },
      {
        id: '54',
        artist: 'Metallica',
        name: 'The Extacy of Gold',
        album: 'S&M'
      },
      {
        id: '759',
        artist: 'Roxette',
        name: 'Joyride',
        album: 'Tourism'
      }],
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
    for (let tracklistIndex = 0; tracklistIndex < tracklist.length; tracklistIndex++){
      if (track.id === tracklist[tracklistIndex].id){
        alert('Track already in playlist');
        console.log(tracklist[tracklistIndex].id)
        console.log(tracklist[tracklistIndex].id)
        console.log(tracklist[tracklistIndex].id)
        console.log(track.id)
      } else {
        this.setState({playlistTracks: tracklist.push(track)})
      }
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
    const xhr = new XMLHttpRequest();
    const apiKey = '';
    const url = '';
    const data = JSON.stringify({id: '200'});

    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
        //save playlist function.
      }
    };

    xhr.open('POST', url);
    xhr.send(data);
  }

  searchDeezer(userInput) {
    return Deezer.search(userInput).then(trackList => {
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
