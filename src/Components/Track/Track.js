import React from 'react';
import './Track.css';

let isListed;

export class Track extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction(){
    if(this.prop.isRemoval === true){
      isListed = <a>-</a>;
    }
    isListed = <a>+</a> ;
  }

  addTrack(e){
    const track = e.target.value;
    this.props.onAdd(track);
  }

  removeTrack(e){
    const track = e.target.value;
    this.props.onRemove(track);
  }

  render() {
    return (
      <div className="Track" onClick={isListed}>
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <div className="Track-action">
          {this.isListed}
        </div>
      </div>
    );
  }
}
