import React, { Component } from 'react';
import getTime from '../../utils/timeConversion';

export default class Consolation extends Component {
  render() {
    const { rest, currentTime } = this.props;
    return (
      <div className="table-body">
        {rest.map((player) => (
          <div className="table-content" key={player.id}>
            <span className="table-content-ranking">{player.rank}</span>
            <span className="table-content-name">{player.fullName}</span>
            <span className="table-content-startTime">
              {getTime(player.startTime)}
            </span>
            <span className="table-content-finishTime">
              {currentTime < player.finishTime
                ? ''
                : getTime(player.finishTime)}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
