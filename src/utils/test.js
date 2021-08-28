import names from './names';
const numberOfAthletes = 10;

const players = [];

for (let i = 0; i < numberOfAthletes; i++) {
  players.push({
    id: `#${i + 1}${Date.now()}`,
    jersy: 111 + i,
    fullName: names[i],
    velocity: Math.random() * 8 + 1,
    acceleration: Math.random(),
    distance: 0,
    startTime: null,
    finishTime: null,
    rank: 'N/A',
  });
}

export default players;
