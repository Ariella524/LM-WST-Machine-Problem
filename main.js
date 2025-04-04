/*var today = new Date();
console.log(today.toDateString()); 
*/

/*function getInput(ename, cIn, cOut) {
    console.log(ename);
    console.log(cIn);
    console.log(cOut);
  }*/

let ename;
var cIn;
var cOut;
var a;
var b;
var timeIn;
var timeOut;


const records = [];

document.getElementById("submit").onclick = function () {
  ename = document.getElementById("ename").value;
  cIn = document.getElementById("cIn").value;
  cOut = document.getElementById("cOut").value;

  cIn.push
    
  console.log(ename);
  console.log(cIn);
  console.log(cOut);
  document.getElementById("employees").textContent = `hello, ${ename}!`;

  document.getElementById("employees").textContent = ename;
  document.getElementById("cInDT").textContent = cIn;
  document.getElementById("cOutDT").textContent = cOut;

 a = new Date(cIn);
  b = new Date(cOut);
  timeIn = a.getHours()
  timeOut = b.getHours();

  var ttlhrs = b - a;
  console.log(ttlhrs);
  ttlhrs = ttlhrs / 36e5;
  console.log(timeIn);
  console.log(timeOut);
  console.log(ttlhrs);
  document.getElementById("THW").textContent = ttlhrs; 


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
