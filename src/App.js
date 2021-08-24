import React, { Component } from 'react';
import './App.scss';
import Entry from './Components/Entry/Entry';
import Winner from './Components/WInner/Winner';
import athletes from './utils/getNames';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryOrder: [],
      finishOrder: [],
      filteredEntry: [],
      filteredFinish: [],
      startTime: null,
      endTime: null,
      currentTime: null,
      interval: 500,
    };
  }

  filterUsers() {
    let filteredEntryArr = this.state.entryOrder.filter(
      (player) => player.startTime <= this.state.currentTime
    );
    filteredEntryArr.reverse();
    const filteredFinishArr = this.state.finishOrder.filter(
      (player) => player.finishTime <= this.state.currentTime
    );
    this.setState({
      filteredEntry: filteredEntryArr,
      filteredFinish: filteredFinishArr,
      currentTime: this.state.currentTime + this.state.interval,
    });
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
      finishOrder: sortedAthletesFinish,
      startTime: sortedAthletesEntry[0].startTime,
      endTime: sortedAthletesFinish[len - 1].finishTime,
      currentTime: sortedAthletesEntry[0].startTime - 10000,
    });

    this.timer = setInterval(() => this.filterUsers(), this.state.interval);
  }

  componentDidUpdate() {
    if (this.state.currentTime > this.state.endTime) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { filteredEntry, filteredFinish } = this.state;
    return (
      <div className="App">
        <Entry className="Entry" entries={filteredEntry} />
        <Winner className="Winner" finishes={filteredFinish} />
      </div>
    );
  }
}
  