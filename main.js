var numOfEmp = 0;
var employees = [];
var inTime = [];
var outTime = [];
var ttlhrs = [];
var date=[];

var n = 1;
var x = 0;

function AddRow(){

    var AddRown = document.getElementById('details');
    var NewRow = AddRown.insertRow(n);

    employees[x] = document.getElementById("ename").value;
    inTime[x] = document.getElementById("cIn").value;
    outTime[x] = document.getElementById("cOut").value;

    var a = new Date(inTime[x]);
    var b = new Date(outTime[x]);

    ttlhrs[x] = b - a;
    ttlhrs[x] = ttlhrs[x] / 36e5;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);

    cel1.innerHTML = employees[x];
    cel2.innerHTML = inTime[x];
    cel3.innerHTML = outTime[x];
    cel4.innerHTML = ttlhrs[x];
    let sum = 0;

    for (let i = 0; i < ttlhrs.length; i++) {
      sum += ttlhrs[i];
    }

    sum= sum / ttlhrs.length;

    date[x] = new Date(inTime[x]);
    let latest = new Date(Math.max.apply(null, date));
    let earliest = new Date(Math.min.apply(null, date));
    
    numOfEmp += 1;
    n++;
    x++;
    document.getElementById("latest").textContent = latest;
    document.getElementById("earliest").textContent = earliest;
    document.getElementById("ttlemp").textContent = numOfEmp;
    document.getElementById("ave").textContent = sum;
    
}

