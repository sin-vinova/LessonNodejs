const arr = ['morning', 'afternoon', 'evening'];
const newArray = arr.map((item) => {
	return {
		name: item,
	};
});

console.log('newArray', newArray);

if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		if (typeof this !== 'function') {
			throw new TypeError('Function. prototype.bind - what is trying to be bound is not callable');
		}
		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP = function () {},
			fBound = function () {
				return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
			};
		if (this.prototype) {
			fNOP.prototype = this.prototype;
		}
		fBound.prototype = new fNOP();
		return fBound;
	};
}

const students = [
	{
		name: 'Nam',
		age: 24,
		gender: 'male',
	},
	{
		name: 'Mai',
		age: 22,
		gender: 'female',
	},
	{
		name: 'Trang',
		age: 23,
		gender: 'female',
	},
	{
		name: 'An',
		age: 20,
		gender: 'male',
	},
	{
		name: 'Thien',
		age: 27,
		gender: 'male',
	},
];

let countStudentMale = 0;
let countStudentFemale = 0;
students.forEach((student) => {
  student.gender === 'male' ? countStudentMale += 1 : countStudentFemale += 1
});
const nameStudent = students.map((item) => item.name);

const countMale = students.reduce((initial, student) => (student.gender === 'male' ? initial + 1 : initial), 0)

console.log('students', countStudentMale, countStudentFemale, nameStudent);
