export function formatDate(date: Date): string {
  const shortDate = new Intl.DateTimeFormat("en", {dateStyle: "short"})
  return shortDate.format(date)
}