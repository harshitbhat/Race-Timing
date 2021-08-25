import React, { Component } from 'react';
import gold from '../../images/gold.jpg';
import silver from '../../images/silver.jpg';
import bronze from '../../images/bronze.jpg';
import './EntryList.scss';

export default class EntryList extends Component {
  getTime(epoch) {
    const time = new Date(epoch);
    const h = (time.getHours() + '').padStart(2, 0);
    const m = (time.getMinutes() + '').padStart(2, 0);
    const s = (time.getSeconds() + '').padStart(2, 0);
    const ms = (time.getMilliseconds() + '').padStart(3, 0);
    return `${h}:${m}:${s}:${ms}`;
  }

  render() {
    const { rankings, currentTime } = this.props;
    const winner = rankings.filter(
      (player) => player.rank === 1 || player.rank === 2 || player.rank === 3
    );
    const rest = rankings.filter(
      (player) => player.rank !== 1 && player.rank !== 2 && player.rank !== 3
    );
    return (
      <div className="main-table">
        <div className="table-headers">
          <span className="table-content-ranking header-text">Ranking</span>
          <span className="table-content-name header-text">Name</span>
          <span className="table-content-startTime header-text">
            Start Time
          </span>
          <span className="table-content-finishTime header-text">
            Finish Time
          </span>
        </div>
        <div>
          {winner.length > 0 ? (
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
                    {this.getTime(player.startTime)}
                  </span>
                  <span className="table-content-finishTime">
                    {this.getTime(player.finishTime)}
                  </span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="table-body">
          {rest.map((player) => (
            <div className="table-content" key={player.id}>
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
                {this.getTime(player.startTime)}
              </span>
              <span className="table-content-finishTime">
                {currentTime < player.finishTime
                  ? ''
                  : this.getTime(player.finishTime)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
