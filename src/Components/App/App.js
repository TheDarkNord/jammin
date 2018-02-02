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
      searchResults: [{
        id: '1',
        name: 'The Extacy of Gold',
        artist: 'Metallica',
        album: 'S&M'
      },
      {
        id: '2',
        name: 'Just a girl',
        artist: 'No Doubt',
        album: 'Tragic Kingdom'
      },
      {
        id: '3',
        name: 'Americana',
        artist: 'The Offspring',
        album: 'Americana'
      },
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
