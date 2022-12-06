import { DateTime } from './luxon.js';

const TimeDate = document.querySelector('.dateTime');
const timeDate = () => {
  const date = DateTime.now();
  TimeDate.innerHTML = date.toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
};

export default timeDate;
