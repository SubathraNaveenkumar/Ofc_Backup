
var toalRow = 4;
var totalCol = 4;
var min = 1;
var max = 9;
var full_name= null;

var obj = [
    {
        firstname : 'suba',
        lastname : 'bala',
        age : 25
    },
    {
        firstname : 'karthi',
        lastname : 'gowtham',
        age : 28
    },
    {
        firstname : 'abi',
        lastname : 'akil',
        age : 31
    },
    {
        firstname : 'abi',
        lastname : 'akil',
        age : 31
    }
]

function testMap(person) {
    full_name = ['Name: ', person.firstname, 'Last: ',person.lastname, 'Age: ', person.age].join(" ")
    return full_name;
}

document.getElementsByClassName('fun-map')[0].innerHTML = obj.map(testMap)

dynamicTable();
function dynamicTable() {
    var div = document.getElementById('dync-table');
    var tabl = document.createElement('table')
    var changeIndex = 0;
    tabl.border = '1'
   
    console.log(obj.length)
    for (var i = 1; i < toalRow; i++) {
        var row = document.createElement('tr')
        for (var j = 1; j < totalCol; j++) {
            var col = document.createElement('td');
            var col1 = document.createElement('td');
            var col2 = document.createElement('td');
            //var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
            var cellTextFirst = document.createTextNode(obj[changeIndex].firstname); 
            var cellTextLast = document.createTextNode(obj[changeIndex].lastname); 
            var cellTextAge = document.createTextNode(obj[changeIndex].age);  
        }
        console.log(cellTextFirst, cellTextLast, cellTextAge)
        col.appendChild(cellTextFirst);
        col1.appendChild(cellTextLast);
        col2.appendChild(cellTextAge);
        row.appendChild(col);
        row.appendChild(col1);
        row.appendChild(col2);
        changeIndex++;
        tabl.appendChild(row);
    }
  
    div.appendChild(tabl);
}