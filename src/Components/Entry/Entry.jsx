import React, { Component } from 'react';

export default class Entry extends Component {
  render() {
    const { entries } = this.props;
    return (
      <div>
        <h1>Entries Table</h1>
        {entries.length > 0 ? (
          <ul>
            {entries.map((player) => (
              <li key={player.fullName}>
                <h5>
                  {player.fullName} -{' '}
                  {new Date(player.startTime).toLocaleString() +
                    ' ' +
                    new Date(player.startTime).getMilliseconds()}
                </h5>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No one has entered the track</h2>
        )}
      </div>
    );
  }
}
