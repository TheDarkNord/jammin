import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      SearchResults: [{
        name: '',
        artist: '',
        album: ''
      }]
    }
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div clasNames="App-playlist">
            <SearchResults searchResults="this.state.searchResults"/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
