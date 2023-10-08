// Дан следующий объект с работниками и их зарплатами.Увеличьте зарплату каждого работника на 10%.

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


