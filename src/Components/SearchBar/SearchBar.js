import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      title: '',
      album: '',
      artist: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(e){
    const userInput = e.target.value;
    this.props.onSearch(userInput);
  }

  handleTermChange(event){
    this.setState({track: event.target.value})
    this.setState({album: event.target.value})
    this.setState({artist: event.target.value})
  }

  handleSearch(event){
    this.props.onSearch(this.state.title);
  }

  render(){
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    )
  }
}
