import React from 'react';
import './Track.css';

let isListed;

export class Track extends React.Component {
  renderAction(){
    if(this.prop.isRemoval === true){
      isListed = ` - `;
    }
    isListed = ` + `;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{isListed}</a>
      </div>
    );
  }
}
