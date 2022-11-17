function getDayOfWeek(utc) {
  const date = new Date(utc * 1000);
  const dayWeek = date.getDay();
  const month = date.toLocaleString("default", { month: "short" });
  const dayMonth = date.getDay();

  let day;

  switch (dayWeek) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "unknown day";
  }
  return `${month} ${dayMonth}`;
}

function getHours(utc) {
  const date = new Date(utc * 1000);
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${hours}:${minutes}`;
}
