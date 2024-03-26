// Convert a string to a URL-friendly formatted string.
export const formatUrlString = (string) =>
  string
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-");
