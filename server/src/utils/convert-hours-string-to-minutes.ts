// "18:00" -> 1080

export function convertHoursStringToMinutes(houtString: string) {
  const [hours, minutes] = houtString.split(":").map(Number);
  const minutesAmount = hours * 60 + minutes;
  return minutesAmount
}
