var array1 = ['a', 'b', 'c'];
var array2 = [15, 25, 13];
var findIndex = [8, 2, 3, 4, 5, 2, 3, 8];
var insertArray = [10, 25, 36, 89, 74, 55];

document.getElementById('arr-concat').innerHTML = array1.concat(array2); // array concat

function arrEvery(val, index) {
    return val > 14;
}

function displayResults() {
    document.getElementById('arr-every').innerHTML = array2.every(arrEvery); // array every
}

document.getElementById('arr-indexOf').innerHTML = array2.indexOf(25);  // array indexOf

document.getElementById('arr-join').innerHTML = array1.join(' + ');

document.getElementById('arr-lastIndexOf').innerHTML = findIndex.lastIndexOf(3); //array lastIndexOf (2 occurence position)

let calMap = value => value + 1;

document.getElementById('arr-map').innerHTML = findIndex.map(calMap); // array map

let addItems = insertArray.push(100);
 
document.getElementById('arr-push').innerHTML = insertArray // array push

let removeItems = insertArray.pop();

document.getElementById('arr-pop').innerHTML = insertArray  //array pop

document.getElementById('arr-reduce').innerHTML = findIndex.reduce(function(a, b) { return a + b});  //reduce

document.getElementById('arr-reduceRight').innerHTML = insertArray.reduceRight(function(a, b) { return a + b}) //reduceRight
