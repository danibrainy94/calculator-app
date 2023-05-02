// declaring all the constants from DOM

function display(value) {
    document.getElementById("display").value += value;
}

// clearing the display screen
function screenClear() {
    document.getElementById("display").value = "";
}

// calculating and reurning results

function calc() {
    var a = document.getElementById("display").value;

    //evaluating the values inputs on the display screen
    var b = eval(a);
    document.getElementById("display").value = b;
}