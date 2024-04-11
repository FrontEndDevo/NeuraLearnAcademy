// Convert a string to a URL-friendly formatted string.
export const formatUrlString = (string) =>
  string
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-");

// Format numbers in thousands.
export function formatNumbersInThousands(num) {
  return num > 999 ? (num / 1000).toFixed(0) + "K" : num;
}
