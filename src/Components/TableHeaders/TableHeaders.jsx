import React, { Component } from 'react';

export default class TableHeaders extends Component {
  render() {
    return (
      <div className="table-headers">
        <span className="table-content-ranking header-text">Rank</span>
        <span className="table-content-name header-text">Name</span>
        <span className="table-content-startTime header-text">Start Time</span>
        <span className="table-content-finishTime header-text">
          Finish Time
        </span>
      </div>
    );
  }
}
