const MINUTES_PER_DAY = 1440;
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

const timeOfDay = (int) => {
  let hours;
  let minutes;
  if (int < 0) {
    hours = Math.floor(
      ((int % MINUTES_PER_DAY) + MINUTES_PER_DAY) / MINUTES_PER_HOUR
    );
    minutes = Math.floor(
      ((int % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_HOUR
    );
  } else {
    hours = Math.floor((int % MINUTES_PER_DAY) / MINUTES_PER_HOUR);
    minutes = (int % MINUTES_PER_DAY) % MINUTES_PER_HOUR;
  }

  if (hours.toString().length < 2) hours = `0${hours}`;
  if (minutes.toString().length < 2) minutes = `0${minutes}`;
  console.log(`${hours}:${minutes}`);
};
