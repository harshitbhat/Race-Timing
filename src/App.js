import React, { Component } from 'react';
import Entry from './Components/Entry/Entry';
import TestComponent from './Components/TestComponent/TestComponent';
import playeres from './utils/test';
import './App.scss';

export default class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athletes: [],
      tick: 0,
      isRaceStarted: false,
      timeStarted: null,
      finalLegDistance: 100,
      raceDistance: 300,
      entries: [],
    };
    this.startRace = this.startRace.bind(this);
  }

  componentDidMount() {
    this.setState({
      athletes: playeres,
    });
  }

  go() {
    const { tick, finalLegDistance, raceDistance, athletes } = this.state;
    const running = athletes.map((pl) => ({
      ...pl,
      distance:
        Math.round(pl.velocity * tick + (pl.acceleration * tick ** 2) / 2) <=
        raceDistance
          ? Math.round(pl.velocity * tick + (pl.acceleration * tick ** 2) / 2)
          : raceDistance,
    }));
    const filtered = running.filter((pl) => pl.distance >= finalLegDistance);
    for (const pl of filtered) {
      if (pl.startTime === null) {
        pl.startTime = Date.now();
      }
      if (pl.distance === raceDistance && pl.finishTime === null) {
        pl.finishTime = Date.now();
      }
    }
    this.setState(() => ({
      athletes: running,
      tick: tick + 0.5,
      entries: filtered,
    }));
  }

  calculateTime(distance, acceleration, time) {
    return time + Math.round(Math.sqrt((2 * distance) / acceleration) * 1000);
  }

  startRace() {
    const currentTime = Date.now();

    this.setState(() => ({
      isRaceStarted: true,
      timeStarted: currentTime,
    }));

    this.timer = setInterval(() => this.go(), 500);
  }

  render() {
    const { athletes, isRaceStarted, entries, raceDistance } = this.state;
    return (
      <div className="App-Component">
        <h1 className="App-heading">Sports Event Timing</h1>
        <div className="App-Table-Heading">
          <span>Player Data</span>
          <span>Leader Board</span>
        </div>
        <div className="Table-Content">
          <TestComponent arr={athletes} />
          <Entry entries={entries} raceDistance={raceDistance} />
        </div>
        <div className="Button-Start">
          {!isRaceStarted && (
            <button className="BTN-start-el" onClick={this.startRace}>
              Start Race
            </button>
          )}
        </div>
        <div className="small-screen-message">
          <h2>Please use aplication on larger screen</h2>
        </div>
      </div>
    );
  }
}
