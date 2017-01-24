const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should respond with fizzbuzz for multiples of both 5 and 3', function() {
		const normalCases = [
			{a: 15, expected: 'fizz-buzz'},
			{a: -30, expected: 'fizz-buzz'},
			{a: 720, expected: 'fizz-buzz'}
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.a);
			answer.should.equal(input.expected);
		});
	});

	it('should respond with "buzz" for multiples of 5', function() {
		const normalCases = [
			{a: 10, expected: 'buzz'},
			{a: -500, expected: 'buzz'},
			{a: 2000, expected: 'buzz'}
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.a);
			answer.should.equal(input.expected);
		});
	});

	it('should respond with "fizz" for multiples of 3', function() {
		const normalCases = [
			{a: 9, expected: 'fizz'},
			{a: -36, expected: 'fizz'},
			{a: 3333, expected: 'fizz'}
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.a);
			answer.should.equal(input.expected);
		});
	});

	it('should raise error if args are not numbers', function() {
		const badInputs = [
			['a'],
		    ['hello'],
		    [true]
		];
		badInputs.forEach(function(input) {
			(function() {
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});
});




