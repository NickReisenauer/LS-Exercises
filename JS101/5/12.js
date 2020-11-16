const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

const afterMidnight = (str) => {
  let hours = Number(str.split(":")[0]);
  let minutes = Number(str.split(":")[1]);
  return hours * MINUTES_PER_HOUR + (minutes % MINUTES_PER_DAY);
};

const beforeMidnight = (str) => {
  let time = MINUTES_PER_DAY - afterMidnight(str);
  if (time === MINUTES_PER_DAY) time = 0;
  return time;
};
