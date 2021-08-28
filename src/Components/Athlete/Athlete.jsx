import React, { Component } from 'react';
import './Athlete.scss';

export default class TestComponent extends Component {
  render() {
    const { arr } = this.props;
    return (
      <div className="Player-Data">
        <div className="Player-data-headers">
          <span className="Player-data-id">Id</span>
          <span className="Player-data-name">Name</span>
          <span className="Player-data-distance">Distance Covered (m)</span>
        </div>
        <div className="Player-data-main">
          {arr.map((pl) => (
            <div key={pl.id} className="Player-Data-Row">
              <span className="Player-data-id">{pl.jersy}</span>
              <span className="Player-data-name">{pl.fullName}</span>
              <span className="Player-data-distance">{pl.distance}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
