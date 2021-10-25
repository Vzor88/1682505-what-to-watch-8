export function generateDuration(minutes: number):string {
  let hours = 0;
  while(minutes > 60) {
    hours += 1;
    minutes -= 60;
  }

  return !hours  ? `${minutes}m` : `${hours}h ${minutes}m`;
}
