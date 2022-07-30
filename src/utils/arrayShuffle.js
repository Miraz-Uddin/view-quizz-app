export default function arrayShuffle(arr) {
  for (let index = arr.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const val = arr[index];
    arr[index] = arr[randomIndex];
    arr[randomIndex] = val;
  }
  return arr;
}
