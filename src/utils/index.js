export const timeToSeconds = (time) => {
  const seconds = time.split(':');
  return Number(seconds[2]) + Number(seconds[1])*60 + Number(seconds[0])*60*60;
}

const addZeros = (value) => {
  return value < 10 ? `0${value}` : `${value}`;
}

export const secondsToTime = (time) => {
  const hour = Math.floor(time / 3600);
  const timeLeft = time % 3600;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = time % 60;
  return `${addZeros(hour)}:${addZeros(minutes)}:${addZeros(seconds)}`;
}