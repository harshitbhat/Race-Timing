import React, { Component } from 'react';
import './Entry.scss';
import loader from '../../images/loader.svg';
import EntryList from '../EntryList/EntryList';

export default class Entry extends Component {
  filterEntries() {
    const { entries, raceDistance } = this.props;
    const completed = entries.filter((pl) => pl.distance === raceDistance);
    const notCompleted = entries.filter((pl) => pl.distance !== raceDistance);

    completed.sort((pl1, pl2) => pl1.finishTime - pl2.finishTime);
    notCompleted.sort((pl1, pl2) => pl1.startTime - pl2.startTime).reverse();

    completed.forEach((pl, idx) => (pl.rank = idx + 1));

    return [...completed, ...notCompleted];
  }
  render() {
    const { entries, raceDistance } = this.props;
    const filtered = this.filterEntries(entries);
    return (
      <div className="displayTable">
        {entries.length > 0 ? (
          <EntryList rankings={filtered} raceDistance={raceDistance} />
        ) : (
          <div className="loader">
            <img src={loader} alt="Loader" />
          </div>
        )}
      </div>
    );
  }
}
