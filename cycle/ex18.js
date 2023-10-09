// Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.

let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};

for (let elem in obj1) {
if (obj1[elem] % 2 === 0) {
    obj2[elem] = obj1[elem];
}
}
console.log(obj2);
