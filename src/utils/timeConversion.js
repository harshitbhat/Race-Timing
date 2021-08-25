export default function getTime(epoch) {
  const time = new Date(epoch);
  const h = (time.getHours() + '').padStart(2, 0);
  const m = (time.getMinutes() + '').padStart(2, 0);
  const s = (time.getSeconds() + '').padStart(2, 0);
  const ms = (time.getMilliseconds() + '').padStart(3, 0);
  return `${h}:${m}:${s}:${ms}`;
}
