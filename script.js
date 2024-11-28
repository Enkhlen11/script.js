const max = (a, b, c) => {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
};
console.log();
function max3(a, b, c) {
  const m = max(a, b, c);
  Console.log(m);
  console.log(m * 3);
}
max3(10, 4, 6);

const isleapyear = (year) => {
  if (year % 100 == 0 && year % 400 == 0) {
    return true;
  }
  return false;
};
isleapyear(2024);
console.log(isleapyear(2024));

64 30
const gsd = (a, b) => {
    for(a>b) return a;

};
