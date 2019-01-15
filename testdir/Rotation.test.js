let element = require('./Rotation');

describe('Rotation test', () =>
{
    test('Rotates the list by 0 element/s', () =>
    {
        expect(element.rotate(-1)).toEqual([1,2,3,4,5,6]);
    })
    test('Rotates the list by 0 element/s', () =>
    {
        expect(element.rotate(0)).toEqual([1,2,3,4,5,6]);
    })
    test('Rotates the list by 1 element/s', () =>
    {
        expect(element.rotate(1)).toEqual([2,3,4,5,6,1]);
    })
    test('Rotates the list by 2 element/s', () =>
    {
        expect(element.rotate(2)).toEqual([3,4,5,6,1,2]);
    })
    test('Rotates the list by 3 element/s', () =>
    {
        expect(element.rotate(3)).toEqual([4,5,6,1,2,3]);
    })
    test('Rotates the list by 4 element/s', () =>
    {
        expect(element.rotate(4)).toEqual([5,6,1,2,3,4]);
    })
    test('Rotates the list by 5 element/s', () =>
    {
        expect(element.rotate(5)).toEqual([6,1,2,3,4,5]);
    })
    test('Rotates the list by 7 element/s', () =>
    {
        expect(element.rotate(7)).toEqual([1,2,3,4,5,6]);
    })
})