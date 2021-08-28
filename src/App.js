import React, { Component } from 'react';

import Entry from './Components/Entry/Entry';
import Athlete from './Components/Athlete/Athlete';
import playeres from './utils/test';
import Overlay from './Components/Overlay/Overlay';
import Button from './Components/Button/Button';

import './App.scss';

export default class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athletes: [],
      tick: 0,
      isRaceStarted: false,
      timeStarted: null,
      finalLegDistance: 150,
      raceDistance: 200,
      entries: [],
    };
    this.startRace = this.startRace.bind(this);
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
      tick: tick + 1,
      entries: filtered,
    }));
  }

  startRace() {
    const currentTime = Date.now();

    this.setState(() => ({
      isRaceStarted: true,
      timeStarted: currentTime,
    }));

    this.timer = setInterval(() => this.go(), 1000);
  }

  componentDidMount() {
    this.setState({
      athletes: playeres,
    });
  }

  componentDidUpdate() {
    const { athletes, raceDistance } = this.state;
    if (athletes.every((pl) => pl.distance === raceDistance)) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
          <Athlete arr={athletes} />
          <Entry
            entries={entries}
            raceDistance={raceDistance}
            isRaceStarted={isRaceStarted}
          />
        </div>
        <div className="Button-Start">
          <Button isRaceStarted={isRaceStarted} startRace={this.startRace} />
        </div>
        <Overlay />
      </div>
    );
  }
}
