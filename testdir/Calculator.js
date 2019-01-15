const add = (a,b) => 
{
    if(!a && !b)
        return NaN;
    if(!b)
        return a;
    if(!a)
        return b;
    else
        return a+b;
};
const sub = (a,b) =>
{
    if(!a && !b)
        return NaN;
    if(!b)
        return a;
    if(!a)
        return b*-1;
    else
        return a-b;
} ;
const mul = (a,b) =>
{
    if(!a && !b)
        return NaN;
    if(!b)
        return a*0;
    if(!a)
        return b*0;
    else
        return a*b;
};
const div = (a,b) =>
{
    if(!a && !b)
        return NaN;
    if(!b)
        return NaN;
    if(!a)
        return 0/b;
    else
        return a/b;
};

module.exports = {'add':add,'sub':sub,'mul':mul,'div':div}