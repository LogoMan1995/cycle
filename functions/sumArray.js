// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов
function sumArray(array) {
    let res = 0;

    for (let i = 0; i < array.length; i++) {
        res += array[i];
    }

    return res;
}

console.log(sumArray([1, 2, 3, 4]));