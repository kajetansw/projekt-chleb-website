function formatMinutes(minutes: number): string {
  const hoursSuffix = 'h';
  const minutesSuffix = 'min';

  if (minutes < 60) {
    return `${minutes}${minutesSuffix}`;
  }

  const hoursSection = `${Math.floor(minutes / 60)}${hoursSuffix}`;
  const minutesSection = minutes % 60 === 0 ? '' : ` ${minutes % 60}${minutesSuffix}`;
  return `${hoursSection}${minutesSection}`;
}

export default formatMinutes;
