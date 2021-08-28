import React, { Component } from 'react';
import getTime from '../../utils/timeConversion';
import './Consolation.scss';

export default class Consolation extends Component {
  render() {
    const { rest, raceDistance } = this.props;
    return (
      <div className="rest-table-body">
        {rest.map((player) => (
          <div className="table-content" key={player.id}>
            <span className="table-content-ranking">{player.rank}</span>
            <span className="table-content-name">{player.fullName}</span>
            <span className="table-content-startTime">
              {getTime(player.startTime)}
            </span>
            <span className="table-content-finishTime">
              {player.distance !== raceDistance
                ? ''
                : getTime(player.finishTime)}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
