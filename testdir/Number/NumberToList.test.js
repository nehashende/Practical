let convertNum = require('./NumberToList');

test('Converts number to list', () =>
{
    expect(convertNum.convert(2342)).toEqual([2,3,4,2])
})
/* test('Returns NaN if undefined', () =>
{
    expect(convertNum.convert(0)).toEqual([0])
}) */