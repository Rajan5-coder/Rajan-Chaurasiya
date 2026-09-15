
let input1 = document.getElementById("Input1");
let input2 = document.getElementById("Input2");
let input1NOTgate = document.getElementById("Input1NOTgate");
let ans;
let val1;
let val2;

if(window.location.pathname.includes("01_AND.html")){
    document.getElementById("Submit").onclick = function(){
    val1 = input1.value;
    val1 = Number(val1);
    val2 = input2.value;
    val2 = Number(val2);
    if((val1 == 1 || val1 == 0) && (val2 == 1 || val2 == 0)){
        ans = (val1 === 1 && val2 === 1) ? 1 : 0 ;
    }
    else{ ans = null;}
    document.getElementById("Output1").textContent = ans;
    document.getElementById("Output2").textContent = ans;
    }
}

if(window.location.pathname.includes("02_OR.html")){
    document.getElementById("Submit").onclick = function(){
    val1 = input1.value;
    val1 = Number(val1);
    val2 = input2.value;
    val2 = Number(val2);
    if((val1 == 1 || val1 == 0) && (val2 == 1 || val2 == 0)){
        ans = (val1 === 1 || val2 === 1) ? 1 : 0 ;
    }
    else{ ans = null;}
    document.getElementById("Output1").textContent = ans;
    document.getElementById("Output2").textContent = ans;
    }
}

if(window.location.pathname.includes("03_NOT.html")){
    document.getElementById("Submit").onclick = function(){
    val1 = input1NOTgate.value;
    val1 = Number(val1);
    if(val1 == 1 || val1 == 0){
        ans = 1 - val1;
    }
    else{ ans = null;}
    document.getElementById("Output1").textContent = ans;
    document.getElementById("Output2").textContent = ans;
    }
}

if(window.location.pathname.includes("04_NAND.html")){
    document.getElementById("Submit").onclick = function(){
    val1 = input1.value;
    val1 = Number(val1);
    val2 = input2.value;
    val2 = Number(val2);
    if((val1 == 1 || val1 == 0) && (val2 == 1 || val2 == 0)){
        ans = (val1 === 1 && val2 === 1) ? 0 : 1 ;
    }
    else{ ans = null;}
    document.getElementById("Output1").textContent = ans;
    document.getElementById("Output2").textContent = ans;
    }
}

if(window.location.pathname.includes("05_NOR.html")){
    document.getElementById("Submit").onclick = function(){
    val1 = input1.value;
    val1 = Number(val1);
    val2 = input2.value;
    val2 = Number(val2);
    if((val1 == 1 || val1 == 0) && (val2 == 1 || val2 == 0)){
        ans = (val1 === 0 && val2 === 0) ? 1 : 0 ;
    }
    else{ ans = null;} 
    document.getElementById("Output1").textContent = ans;
    document.getElementById("Output2").textContent = ans;
    }
}

if(window.location.pathname.includes("06_XOR.html")){
    document.getElementById("Submit").onclick = function(){
    val1 = input1.value;
    val1 = Number(val1);
    val2 = input2.value;
    val2 = Number(val2);
    if((val1 == 1 || val1 == 0) && (val2 == 1 || val2 == 0)){
        ans = (val1 === val2 && val2 === val1) ? 0 : 1 ;
    }
    else{ ans = null;}
    document.getElementById("Output1").textContent = ans;
    document.getElementById("Output2").textContent = ans;
    }
}

if(window.location.pathname.includes("07_NXOR.html")){
    document.getElementById("Submit").onclick = function(){
    val1 = input1.value;
    val1 = Number(val1);
    val2 = input2.value;
    val2 = Number(val2);
    if((val1 == 1 || val1 == 0) && (val2 == 1 || val2 == 0)){
        ans = (val1 === val2 && val2 === val1) ? 1 : 0 ;
    }
    else{ ans = null;}
    document.getElementById("Output1").textContent = ans;
    document.getElementById("Output2").textContent = ans;
    }
}