import React, { Component } from 'react';
import './App.scss';
import Entry from './Components/Entry/Entry';
import athletes from './utils/getNames';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryOrder: [],
      outputOrder: [],
      startTime: null,
      firstFinishTime: null,
      endTime: null,
      currentTime: null,
      interval: 500,
    };
  }

  filterUsers() {
    const { currentTime, entryOrder, interval, firstFinishTime } = this.state;

    const filteredList = entryOrder.filter(
      (player) => player.startTime <= currentTime
    );

    if (currentTime < firstFinishTime) {
      this.setState({
        outputOrder: filteredList.reverse(),
        currentTime: currentTime + interval,
      });
    } else {
      const winner = filteredList
        .filter((player) => player.finishTime <= currentTime)
        .sort((pl1, pl2) => pl1.finishTime - pl2.finishTime);
      const remaining = filteredList
        .filter((player) => player.finishTime > currentTime)
        .sort((pl1, pl2) => pl2.startTime - pl1.startTime);

      winner.forEach((player, index) => (player.rank = index + 1));
      remaining.forEach((player, index) => (player.rank = 'N/A'));
      this.setState({
        outputOrder: [...winner, ...remaining],
        currentTime: currentTime + interval,
      });
    }
  }

  componentDidMount() {
    const sortedAthletesEntry = [...athletes].sort(
      (a, b) => a.startTime - b.startTime
    );
    const sortedAthletesFinish = [...athletes].sort(
      (a, b) => a.finishTime - b.finishTime
    );

    const len = athletes.length;

    this.setState({
      entryOrder: sortedAthletesEntry,
      startTime: sortedAthletesEntry[0].startTime,
      firstFinishTime: sortedAthletesFinish[0].finishTime,
      endTime: sortedAthletesFinish[len - 1].finishTime,
      currentTime: sortedAthletesEntry[0].startTime - 5000,
    });

    this.timer = setInterval(() => this.filterUsers(), this.state.interval);
  }

  componentDidUpdate() {
    if (
      this.state.outputOrder.length > 0 &&
      !this.state.outputOrder.some((player) => player.rank === 'N/A')
    ) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { outputOrder, currentTime } = this.state;
    return (
      <div className="App">
        <Entry
          className="Entry"
          entries={outputOrder}
          currentTime={currentTime}
        />
      </div>
    );
  }
}
