
function isNumber(num, callbackFun)
{
    if(num%2===0)
    {
        callbackFun(true)
    }
    else
    {
        callbackFun(false)
    }
}
isNumber(10, function(result)
{
    if(result)
    {
        console.log("even")
    }
    else
    {
        console.log("odd")
    }
})
/* call back function */

getNumbers ()
function getNumbers ()
{
    console.log("abbbb")
}
const getNum = () => console.log("aaaaa")

var c = 00;

letUse();

function letUse()
{
    let a=10;
    const b=25;
    console.log("inside function use let", a)
    console.log("inside function use const", b)
    console.log("inside function use var", c)
}

console.log("outside function use var", c)

console.log("outside function use const", b)

console.log("outside function use let", a)

/***** */



