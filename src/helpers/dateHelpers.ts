const basicFormatDateStr = (dateStr = '', locale: Intl.LocalesArgument) => {
  if (locale === null) return null;

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'UTC',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const date = convertDateStrToDate(dateStr);

  return date.toLocaleDateString(locale, options);
};

const formatDateStr = (
  dateStr = '',
  locale: Intl.LocalesArgument,
  options: Intl.DateTimeFormatOptions,
) => {
  const dateUTC = convertDateStrToDateUTC(dateStr);
  return dateUTC.toLocaleDateString(locale, options);
};

const convertDateStrToDate = (dateStr = '') => {
  const dateInMilliseconds = Date.parse(dateStr);
  return new Date(dateInMilliseconds);
};

const convertDateStrToDateUTC = (dateStr = '') => {
  const dateInMilliseconds = Date.parse(dateStr);
  const date = new Date(dateInMilliseconds);
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return new Date(Date.UTC(year, month, dayOfMonth, hours, minutes, seconds));
};

const showDetailsDateTime = (date: Date) => {
  if (date === null || date === undefined)
    return "Error. Parameter 'date' is null";
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const data = [year, month, dayOfMonth, hours, minutes, seconds];

  return data.join(' ');
};

const extractTimeStrFromDate = (dateStr = '') => {
  const parts = dateStr.split(' ');
  return parts.length > 1 ? parts[1] : '';
};

const resetTime = (date: Date) => {
  if (date !== null && date !== undefined) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
  }
};

export {
  basicFormatDateStr,
  convertDateStrToDate,
  convertDateStrToDateUTC,
  extractTimeStrFromDate,
  formatDateStr,
  resetTime,
  showDetailsDateTime,
};
