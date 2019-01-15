const rotate = (a) =>
{
    var arr = [];
    arr = [1,2,3,4,5,6];
    
    if(a > 0 && a < arr.length)
    {
        var ele = arr.splice(0,a)
    
        for(let i = 0; i < ele.length; i++)
        {
            arr.push(ele[i]);
        }
    }
    else
    {
        console.log("Array index out of bound : " + a)
    }

    return arr;
}

module.exports = { 'rotate' : rotate}