import React, { Component } from 'react';
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
    const { rankings } = this.props;
    const winners = rankings.filter((player) => player.rank !== 'N/A');
    const inRace = rankings.filter((player) => player.rank === 'N/A');
    console.log(winners);
    console.log(inRace);
    return (
      <div className="ranking-table">
        <div>
          <div className="table-headers">
            <span className="table-content-ranking">Ranking</span>
            <span className="table-content-name">Name</span>
            <span className="table-content-startTime">Start Time</span>
            <span className="table-content-finishTime">Finish Time</span>
          </div>
        </div>
        <div className="table-body">
          {rankings.map((player) => (
            <div className="table-content" key={player.id}>
              <span className="table-content-ranking">{player.rank}</span>
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
      </div>
    );
  }
}
