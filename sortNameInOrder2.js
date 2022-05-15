const employees = [
	{ firstName: 'Bill', lastName: 'Cooper', age: 43},
	{ firstName: 'James', lastName: 'River', age: 23},
	{ firstName: 'Jill', lastName: 'Randell', age: 34},
	{ firstName: 'Phillip', lastName: 'Morgan', age: 38},
]

employees.sort((a, b) => (a.age > b.age) ? 1 : -1)