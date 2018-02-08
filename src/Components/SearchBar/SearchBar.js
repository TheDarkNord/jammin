import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(e){
    const userInput = e.target.value;
    this.props.onSearch(userInput);
  }

  handleTermChange(event){
    const newName = event.target.value;
    this.setState({placeholder: newName});
    console.log(this.state.placeholder)
  }

  render(){
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a onClick={this.onSearch}>SEARCH</a>
      </div>
    )
  }
}
