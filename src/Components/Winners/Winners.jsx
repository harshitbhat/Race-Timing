import React, { Component } from 'react';
import gold from '../../images/gold.jpg';
import silver from '../../images/silver.jpg';
import bronze from '../../images/bronze.jpg';
import getTime from '../../utils/timeConversion';

export default class Winners extends Component {
  render() {
    const { winner } = this.props;
    return (
      <div className="winner-table">
        {winner.map((player) => (
          <div className="table-content addMargin" key={player.id}>
            <span className="table-content-ranking">
              {player.rank === 1 ? (
                <img className="medal" src={gold} alt="Gold Medal" />
              ) : player.rank === 2 ? (
                <img className="medal" src={silver} alt="Silver Medal" />
              ) : player.rank === 3 ? (
                <img className="medal" src={bronze} alt="Bronze Medal" />
              ) : (
                player.rank
              )}
            </span>
            <span className="table-content-name">{player.fullName}</span>
            <span className="table-content-startTime">
              {getTime(player.startTime)}
            </span>
            <span className="table-content-finishTime">
              {getTime(player.finishTime)}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
