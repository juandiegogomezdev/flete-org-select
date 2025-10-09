export function convertoTimeStampToLegibleDate(timestamp) {
  // Convert timestamp to dd/mm/yyyy format
  const date = new Date(timestamp);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}
