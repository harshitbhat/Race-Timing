const numberOfAthletes = 10;

const startTime = Date.now();
const maxTime = startTime + 60000;

const getStartAndFinishTime = () => {
  const sT = Math.floor(Math.random() * (maxTime - startTime + 1) + startTime);
  const eT = Math.floor(Math.random() * (maxTime - sT + 1) + sT);
  return [sT, eT + 30000];
};

const athletes = [];

const names = [
  'Emmett Bishop',
  'Fenix Skiles',
  'Jacoby Schulz',
  'Juna Steiger',
  'Shlomo Hacker',
  'Aaryn Manzanares',
  'Renato Nordstrom',
  'Aayden Lombardi',
  'Jaxiel Danna',
  'Danae Hermann',
];

for (let i = 0; i < numberOfAthletes; i++) {
  const [startTime, finishTime] = getStartAndFinishTime();
  athletes.push({
    id: `#${i + 1}${Date.now()}`,
    fullName: names[i],
    startTime: startTime,
    finishTime: finishTime,
    rank: 'N/A',
  });
}

export default athletes;
