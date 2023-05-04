// declaring all the constants from DOM

function display(value) {
    document.getElementById("display").value += value;
}

// clearing the display screen
function screenClear() {
    document.getElementById("display").value = "";
}

// calculating basic arithmetic functions and reurning results

function calc() {
    let a = document.getElementById("display").value;

    //evaluating the values inputs on the display screen 
    let b = eval(a);
    document.getElementById("display").value = b;
    }

// calculating the sin of a number
function calc_sin(){
    let c = document.getElementById("display").value;

    let f = Math.sin(c); 
    f * Math.PI/180;
    document.getElementById("display").value = f;
    
}

//calculating the cos of a number
function calc_cos(){
    let c = document.getElementById("display").value;

    let f = Math.cos(c);
    document.getElementById("display").value = f;
    
}

//calculating the tan of a number
function calc_tan(){
    let c = document.getElementById("display").value;

    let f = Math.tan(c);
    document.getElementById("display").value = f;
    
}

//calculating the square root of a number
function calc_root(){
    let c = document.getElementById("display").value;

    let f = Math.sqrt(c);
    document.getElementById("display").value = f;
    
}

// getting the square of a number
function num_squared() {
    let c = document.getElementById("display").value;
    
    let f = Math.pow(c, 2);
    document.getElementById("display").value = f;
}

// getting the natural logarithm of a number
function num_log() {
    let c = document.getElementById("display").value;
    
    let f = Math.log(c);
    document.getElementById("display").value = f;
}
