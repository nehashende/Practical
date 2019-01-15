let matrixM = require('./Matrix');



test('Matrix addition', () =>
{
    expect(matrixM.matA([])).toEqual([[2,4,6],[8,10,12]])
})
test('Matrix multiplication', () =>
{
    expect(matrixM.matM([])).toEqual([[8,24],[8,24]])
})
test('Matrix subtraction', () =>
{
    expect(matrixM.matS([])).toEqual([[3,3,3],[3,3,3]])
})
test('Matrix transpose', () =>
{
    expect(matrixM.matT([])).toEqual([[1,4,7],[2,5,8],[3,6,9]])
})