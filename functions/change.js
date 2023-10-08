






Дан следующий объект.Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum = 0;
let sum2 = 0;
for (let key in obj) {
sum += Number(key);
sum2 += new Number(obj[key]);
}

console.log(sum/sum2);


Дан следующий массив сделать значениями объекта.


let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 1; i <= arr.length; i++) {
obj[i] = arr[i-1];
}
console.log(obj);






let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for(let key in obj){
	console.log(obj[key])
}