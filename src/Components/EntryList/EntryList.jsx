import React, { Component } from 'react';
import './EntryListN.scss';
import Winners from '../Winners/Winners';
import Consolation from '../Consolation/Consolation';
import TableHeaders from '../TableHeaders/TableHeaders';

export default class EntryList extends Component {
  render() {
    const { rankings, raceDistance } = this.props;
    const winner = rankings.filter(
      (player) => player.rank === 1 || player.rank === 2 || player.rank === 3
    );
    const rest = rankings.filter(
      (player) => player.rank !== 1 && player.rank !== 2 && player.rank !== 3
    );
    return (
      <div className="leaderboard-table">
        <TableHeaders />
        <Winners winner={winner} />
        <Consolation rest={rest} raceDistance={raceDistance} />
      </div>
    );
  }
}
