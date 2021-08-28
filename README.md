# SPORTS EVENT TIMING

This project demonstrates the current state of the race and the leaderboard in real time.
Following information is available:

- Current state of race (Player Data)

  - The list of the athletes along with their current position on the race track.

- LeaderBoard
  - This comprises of the timings of the athletes that have entered the finish corridor.
  - Two types of timing have been captured by the sensors on the race track, i.e Finish Corridor Start Time and Race Finish Time.
  - This leaderboard is divided into two sections:
    - The top section shows the top 3 athletes in ascending order of their finish time.
    - The bottom section shows the athletes as they enter the finishing corridor.

## Project Installation

The app can be viewed live ([Live Demo](https://harshitbhat.github.io/Race-Timing/)).

To run the project in your local environment:

- Clone this repository.
- Go to project directory.
- Run `npm install` .
- Run `npm start`.

## Functionality of the App

### Initial State

- At the start, the race has not started.
- One table shows the details of the athletes and a button which starts the race.

![Initial](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/new/initial.gif)

### As the race starts

- The Player Data table shows the distance the athlete has covered on the race track.
- The bottom section of the Leaderboard gets populated as soon as some athlete enters the finish corridor.
- As soon as someone finishes the race, the final ranking is shown in the Leaderboard table..

![Race](https://github.com/harshitbhat/Small-Projects/blob/master/screenshots/test/new/race.gif)
