Выведите с помощью цикла столбец чисел от 0 до 100.

for(let i = 0; i <= 100; i++) {
	console.log(i)
}

Выведите с помощью цикла столбец чисел от 100 до 1.
for(let i = 100; i >= 1; i--) {
	console.log(i)
}

Выведите с помощью цикла столбец четных чисел от 1 до 100.
for(let i = 1; i < 100; i++) {
	if(i % 2 === 0){
		console.log(i)
	}
}

Заполните массив 10-ю иксами с помощью цикла.

let num = [];
for(let i = 0; i < 10; i++) {
	num.push('x')
}
console.log(num)


Заполните массив числами от 1 до 10 с помощью цикла.

let arr = [];
for(let i = 1; i <= 10; i++) {
	arr.push(i)
}
console.log(arr);



Дан массив числами, например:

let arr = [10, 20, 30, 50, 235, 3000];
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);
  let start  = num[0];
  if (start == 1 ||start  == 2 ||start  == 5) {
    console.log(num);
  }
}



Дан массив с числами. Выведите элементы этого массива в обратном порядке.

let arr = [1, 2, 3, 4, 5]

for (let i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}



Дан следующий объект с работниками и их зарплатами:
Увеличьте зарплату каждого работника на 10%.

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
     str = obj[key] + obj[key] * 0.1;
    console.log(str);}



Дан следующий объект с работниками и их зарплатами.Увеличивалась только тем работникам, у которых она меньше или равна 400.


let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
    if (obj[key] <= 400) {
    str = obj[key] + obj[key] * 0.1;
    console.log(str); 
}
}


Даны следующие массивы. С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let obj = {};

for(let i = 0; i <= 4; i++){
	let key = arr1[i];
	let value = arr2[i];
	obj[key] = value;
}

console.log(obj);








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
