import React, { Component } from 'react';
import './Entry.scss';
import loader from '../../loader.svg';
import EntryList from '../EntryList/EntryList';

export default class Entry extends Component {
  render() {
    const { entries, currentTime } = this.props;
    return (
      <div className="displayTable">
        <h1 className="event-heading">Event Timing LeaderBoard</h1>
        {entries.length > 0 ? (
          <div className="ranking-table">
            <EntryList rankings={entries} currentTime={currentTime} />
          </div>
        ) : (
          <div className="loader">
            <img src={loader} alt="Loader" />
          </div>
        )}
      </div>
    );
  }
}
