import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { isRaceStarted, startRace } = this.props;
    return !isRaceStarted ? (
      <button className="BTN-start-el" onClick={startRace}>
        Start Race
      </button>
    ) : null;
  }
}
