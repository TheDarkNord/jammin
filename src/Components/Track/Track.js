import React from 'react';
import './Track.css';

let isListed;

export class Track extends React.Component {
  renderAction(){
    if(this.prop.isRemoval === true){
      isListed = "-"
    }
    isListed = "+"
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
        <h3></h3>  //track title will go here
        <p></p>  //track artist or album will go here
        </div>
        <a className="Track-action">`${isListed}`</a>
      </div>
    );
  }
}
