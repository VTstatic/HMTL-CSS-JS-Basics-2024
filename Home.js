//let x = Math.floor(Math.random() * 20) + 1;
//let y = Math.floor(Math.random() * 100) + 1;
//let z = Math.floor(Math.random() * 1000) + 1;

let a;
let b;
let c;

document.getElementById("firstBtn").onclick = function(){
    a = Math.floor(Math.random() * 20);
    document.getElementById("countlabel1").innerHTML = a;
}

document.getElementById("secondBtn").onclick = function(){
    b = Math.floor(Math.random() * 100);
    document.getElementById("countlabel2").innerHTML = b;
}

document.getElementById("thirdBtn").onclick = function(){
    c = Math.floor(Math.random() * 1000);
    document.getElementById("countlabel3").innerHTML = c;
} 

document.getElementById("rollBtn").onclick = function(){
    a = Math.floor(Math.random() * 20) + 1;
    b = Math.floor(Math.random() * 100) + 1;
    c = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("countlabel1").innerHTML = a;
    document.getElementById("countlabel2").innerHTML = b;
    document.getElementById("countlabel3").innerHTML = c;
}

document.getElementById("resetBtn").onclick = function(){
    a = 0;
    b = 0;
    c = 0;
    document.getElementById("countlabel1").innerHTML = a;
    document.getElementById("countlabel2").innerHTML = b;
    document.getElementById("countlabel3").innerHTML = c;
}