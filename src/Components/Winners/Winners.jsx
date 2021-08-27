import React, { Component } from 'react';
import getTime from '../../utils/timeConversion';
import winnerLoader from '../../images/winnerLoader.svg';
import './Winner.scss';

export default class Winners extends Component {
  render() {
    const { winner } = this.props;
    return (
      <div className="winner-table">
        {winner.length > 0 ? (
          winner.map((player) => (
            <div className="table-content addWinner" key={player.id}>
              <span className="table-content-ranking">{player.rank}</span>
              <span className="table-content-name">{player.fullName}</span>
              <span className="table-content-startTime">
                {getTime(player.startTime)}
              </span>
              <span className="table-content-finishTime">
                {getTime(player.finishTime)}
              </span>
            </div>
          ))
        ) : (
          <div className="winner-loader">
            <img src={winnerLoader} alt="Loader" />
          </div>
        )}
      </div>
    );
  }
}
