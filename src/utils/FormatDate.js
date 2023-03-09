export const FormatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    const amPm = hours >= 12 ? 'pm' : 'am';
    const twelveHourFormat = hours % 12 || 12;
    return `${twelveHourFormat < 10 ? '0' + twelveHourFormat : twelveHourFormat}:${minutes < 10 ? '0' + minutes : minutes} ${amPm}`;
  };
  