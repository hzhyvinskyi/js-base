const numbers = [32, 61, 18, 23, 5, 11, 94];
const fruit = ['peach', 'apricot', 'pear', 'banana', 'apple', 'watermelon'];
const mixed = new Array(23, 'Hello', true, undefined, null, {a:1, b:1}, new Date());

let val;

function over50(num){
	return num > 50;
}

val = numbers.find(over50);

const person = {
	firstName: 'Roger',
	lastName: 'Steves',
	age: 33,
	email: 'setver@aol.com',
	hobbies: ['music', 'sports'],
	address: {
		city: 'Miami',
		state: 'FL',
	},
	getBirthYear: function () {
		return 2018 - this.age;
	},
};

val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.state;
val = person.address.city;
val = person.getBirthYear();

const people = [
	{name: 'John', age: 30},
	{name: 'Mike', age:34},
	{name: 'James', age:25},
];

for (let i = 0; i < people.length; i++) {
	console.log(people[i].name);
}

// Dates and Times

let dat;

const today = new Date();

let birthday = new Date('07-20-1999 11:12:10');

birthday = new Date('August 14 2007 10:21:05');

birthday.setMonth(5);
birthday.setDate(27);
birthday.setHours(4);
birthday.setFullYear(2000);
birthday.setMinutes(30);
birthday.setSeconds(9);

console.log(birthday);
