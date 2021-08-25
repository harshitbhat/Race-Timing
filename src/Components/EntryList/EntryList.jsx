import React, { Component } from 'react';
import './EntryList.scss';
import Winners from '../Winners/Winners';
import Consolation from '../Consolation/Consolation';
import TableHeaders from '../TableHeaders/TableHeaders';

export default class EntryList extends Component {
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
        <TableHeaders />
        <div>{winner.length > 0 ? <Winners winner={winner} /> : null}</div>
        <Consolation rest={rest} currentTime={currentTime} />
      </div>
    );
  }
}
