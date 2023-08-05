export const getDateFromTimestamp = (timestamp: number) => {
  if (!timestamp || isNaN(timestamp)) return null

  const date = new Date(timestamp * 1000)
  return date.toLocaleString()
}