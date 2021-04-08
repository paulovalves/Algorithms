let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.length = arr.length - 1;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
