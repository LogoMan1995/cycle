// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.

let arr = [1, 3, 5, -6, 7];

let sum = 0;

for ( let i = 0; i < arr.length; i++) {
if ( arr[i] > 0 ) {
sum =sum + arr[i];
}
if ( arr[i] < 0 ) {
break;
}
}

console.log(sum);

