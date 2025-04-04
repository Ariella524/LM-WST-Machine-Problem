/*var today = new Date();
console.log(today.toDateString()); 
*/

/*function getInput(ename, cIn, cOut) {
    console.log(ename);
    console.log(cIn);
    console.log(cOut);
  }*/

let ename;
let numOfEmp=0;
var cIn;
var cOut;
var a;
var b;
var timeIn;
var timeOut;
var table = '';


const records = [];

document.getElementById("submit").onclick = function () {
  ename = document.getElementById("ename").value;
  cIn = document.getElementById("cIn").value;
  cOut = document.getElementById("cOut").value;

    
  /*console.log(ename);
  console.log(cIn);
  console.log(cOut);
  document.getElementById("employees").textContent = hello, ${ename}!;*/

  document.getElementById("employees").textContent = ename;
  document.getElementById("cInDT").textContent = cIn;
  document.getElementById("cOutDT").textContent = cOut;

  table += '<tr>';
  table += '</tr>';

  

 a = new Date(cIn);
  b = new Date(cOut);
  timeIn = a.getHours()
  timeOut = b.getHours();

  var ttlhrs = b - a;
  console.log(ttlhrs);
  ttlhrs = ttlhrs / 36e5;

 

  records.push(++numOfEmp);
  records.push(ttlhrs);





  //console.log(timeIn);
 // console.log(timeOut);
 // console.log(ttlhrs);
  document.getElementById("THW").textContent = ttlhrs; 
  document.getElementById("ttlemp").textContent = numOfEmp;

  addRow("details");
}

function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  //let newText = document.createTextNode("New bottom row");
  newCell.appendChild(newText);


 }


 /*   for(document.getElementById("employees").textContent = 1; document.getElementById("employees").textContent <= 0;  document.getElementById("employees").textContent++){
      console.log(ename);
     // console.log(cIn);
      //console.log(cOut);
  };
  
//var form = document.getElementById("myForm");
//function handleForm(event) { event.preventDefault(); } 
//form.addEventListener('submit', handleForm);
}
*/
