// Дан массив числами, например:

// let arr = [10, 20, 30, 50, 235, 3000];
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);
  let start  = num[0];
  if (start == 1 || start == 2 || start == 5) {
    console.log(num);
  }
}
