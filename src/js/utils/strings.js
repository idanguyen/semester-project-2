export function stringCompare(a, b) {
  if (a.toString() < b.toString()) return -1;
  if (a.toString() > b.toString()) return 1;
  return 0;
}
//https://stackoverflow.com/questions/2167602/optimum-way-to-compare-strings-in-javascript from Gumbo
