// test.js
const addNumbers = require('./index.js');
const expect = require('chai').expect;

describe('Add Numbers Test', () => {
    it('should add two numbers', () => {
        const result = addNumbers(2, 3);
        expect(result).to.equal(5);
    });

    it('should return a single number if only one number is provided', () => {
        const result = addNumbers(5);
        expect(result).to.equal(5);
    });

    it('should return 0 if no numbers are provided', () => {
        const result = addNumbers();
        expect(result).to.equal(0);
    });
});
// JavaScript source code
