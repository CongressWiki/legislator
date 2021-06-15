export default function truncate(
  string: string,
  limit: number,
  useWordBoundary = true
) {
  if (string.length <= limit) {
    return string;
  }

  const subString = string.slice(0, Math.max(0, limit - 1));
  return (
    (useWordBoundary
      ? subString.slice(0, Math.max(0, subString.lastIndexOf(' ')))
      : subString) + '…'
  );
}
