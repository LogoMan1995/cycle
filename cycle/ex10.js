// Дан следующий объект.Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum = 0;
let sum2 = 0;
for (let key in obj) {
sum += Number(key);
sum2 += new Number(obj[key]);
}

console.log(sum/sum2);
