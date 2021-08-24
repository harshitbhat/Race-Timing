import React, { Component } from 'react';

export default class Winner extends Component {
  render() {
    const { finishes } = this.props;
    return (
      <div>
        <h1>Winner Table</h1>
        {finishes.length > 0 ? (
          <ul>
            {finishes.map((player) => (
              <li key={player.fullName}>
                <h5>
                  {player.fullName} -{' '}
                  {new Date(player.finishTime).toLocaleString()}
                </h5>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No one finished the race</h2>
        )}
      </div>
    );
  }
}
