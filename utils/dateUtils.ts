export function isPast(dateTime: string): boolean {
  let closeDate = new Date(dateTime);
  let currentDate = new Date();
  return currentDate > closeDate;
}
