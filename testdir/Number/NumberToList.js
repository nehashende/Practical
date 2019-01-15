const convert = (num) =>
{
    arr = [];
    arr1 = [];
    rev = 0;
    while(num > 0)
    {
        rem = num % 10;
        num = parseInt(num/10);
        arr.push(rem);
    }

    arr1 = arr.reverse();
    //console.log(arr1);
    return (arr1);
};

module.exports = {'convert' : convert}