import React from 'react';
import './Track.css';

export class Track extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction(){
    if(this.props.isRemoval === true){
      return {sign: "+",
              state: "this.addTrack"
            }
    }
    return {sign: "-",
            state: "this.removeTrack"
          }
    console.log(this.props.isRemoval);
  }

  addTrack(){
    const track = this.props.track;
    this.props.onAdd(track);
  }

  removeTrack(e){
    const track = this.props.track;
    this.props.onRemove(track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className ="Track-action">{this.renderAction.sign}</a>
      </div>
    );
  }
}
