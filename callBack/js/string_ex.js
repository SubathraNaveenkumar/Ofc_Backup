var str = 'ES6 String Examples ';
var testStr = `this is es5`;
var a = 10, b = 15;

/*string literals*/

console.log(`String literals: variable
             ${str} 
             ${testStr}`)

console.log(`String literals: expresions 
            ${a} + ${b} is = ${a + b}`)

function testFun() {
    return 'Function called...'
}

console.log(`String literals: ${testFun()}...!`)

/* string methods */

var start_result = str.startsWith('String', 4);

var end_result = str.endsWith('Examples', 19);

var include_result = str.includes('ES6', 0);

var repeat_result = str.repeat(2)

console.log(`String Methods (startWith): ${start_result}`)

console.log(`String Methods (endsWith): ${end_result}`)

console.log(`Sting Methods (includes): ${include_result}`)

console.log(`String Methods (repeat): ${repeat_result}`)

getVals();

function getVals() {
    console.log(`Title: `, document.title, `Get_URL: `, document.URL)
}


