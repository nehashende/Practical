let Calculator = require('./Calculator');

describe('Addition', () =>
{
    test('adds 1 + 2 to equal 3', () =>
    {
        expect(Calculator.add(1,2)).toBe(3);
    })
    test('adds 2 + undefined to equal 2', () =>
    {
        expect(Calculator.add(2,undefined)).toBe(2);
    })
    test('adds undefined + 2 to equal 2', () =>
    {
        expect(Calculator.add(undefined,2)).toBe(2);
    })
    test('adds undefined + undefined to equal NaN', () =>
    {
        expect(Calculator.add(undefined,0)).toBe(NaN);
    })
})

describe('Subtraction',() =>
{   
    test('subtracts 2 - 2 to equal 0', () =>
    {   
           expect(Calculator.sub(2,2)).toBe(0);
    })
    test('subtracts 0 - 2 to equal -2', () =>
    {   
           expect(Calculator.sub(0,2)).toBe(-2);
    })
    test('subtracts 2 - undefined to equal 2', () =>
    {   
           expect(Calculator.sub(2,undefined)).toBe(2);
    })
    test('subtracts 0 - undefined to equal NaN', () =>
    {   
           expect(Calculator.sub(0,undefined)).toBe(NaN);
    })
})

describe('Multiplication',() =>
{
    test('multiplies 2,2 to equal 4', () =>
    {
        expect(Calculator.mul(2,2)).toBe(4);
    })
    test('multiplies 0,2 to equal 0', () =>
    {   
           expect(Calculator.mul(0,2)).toBe(0);
    })
    test('multiplies 2,0 to equal 0', () =>
    {   
           expect(Calculator.mul(2,0)).toBe(0);
    })
    test('multiplies 0,undefined to equal NaN', () =>
    {   
           expect(Calculator.mul(0,undefined)).toBe(NaN);
    })
})

describe('Division',() =>
{
    test('divides 2/2 to equal 1', () =>
    {
        expect(Calculator.div(2,2)).toBe(1);
    })
    test('divides 0,2 to equal 0', () =>
    {
        expect(Calculator.div(0,2)).toBe(0);
    })
    test('divides 2,0 to equal 0', () =>
    {
        expect(Calculator.div(2,0)).toBe(NaN);
    })
    test('divides 0,undefined to equal NaN', () =>
    {
        expect(Calculator.div(2,2)).toBe(1);
    })
})