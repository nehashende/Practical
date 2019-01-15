const matA = () =>
{
    var mat1 = [[1,2,3],[4,5,6]];
    var mat2 = [[1,2,3],[4,5,6]];
    var mat3 = [];
    for(let i= 0;i<mat1.length;i++)
    {
        mat3[i] = [];
        //mat2[i] = [];
        for(let j=0;j<mat1[i].length;j++)
        {
            mat3[i][j] = mat1[i][j]+mat2[i][j];
        }
    }
    
    console.log(mat3);
    return mat3;
}

const matS = () =>
{
    var mat1 = [[4,5,6],[4,5,6]];
    var mat2 = [[1,2,3],[1,2,3]];
    var mat3 = [];
    for(let i= 0;i<mat1.length;i++)
    {
        mat3[i] = [];
        //mat2[i] = [];
        for(let j=0;j<mat1[i].length;j++)
        {
            mat3[i][j] = mat1[i][j]-mat2[i][j];
        }
    }
    
    console.log(mat3);
    return mat3;
}

const matM = () =>
{
    var mat1 = [[1,2],[1,2]];
    var mat2 = [[4,6],[4,6]];
    var mat3 = [];
    for(let i= 0;i<2;i++)
    {
        mat3[i] = [];
        //mat2[i] = [];
        for(let j=0;j<2;j++)
        {
            mat3[i][j] = 0;
            for(let k = 0; k<2;k++)
            {
                mat3[i][j] += mat1[i][j]*mat2[k][j];
            }
        }
    }
    
    console.log(mat3);
    return mat3;
}

const matT = () =>
{
    var mat1 = [[1,2,3],[4,5,6],[7,8,9]];
    
    var mat2 = [];
    for(let i = 0; i< mat1.length; ++i)
    {
        mat2[i] = [];
        //console.log(mat1);
        for(let j = 0;j<mat1[i].length;++j)
        {
            mat2[i][j] = mat1[j][i];
        }
    }
    console.log(mat2);
    return mat2;
}

module.exports = {'matA' : matA, 'matS' : matS, 'matM' : matM, 'matT' : matT}