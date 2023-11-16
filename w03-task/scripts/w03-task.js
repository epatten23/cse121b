/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2){
    return number1 + number2;
}
function addNumbers (){
    const addNumber1 = Number(document.getElementById('add1').value);
    const addNumber2 = Number(document.querySelector('#add2').value);
    const sum = add(addNumber1, addNumber2);
    document.getElementById("sum").value = sum;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2){
    return number1 - number2;
};

function subtractNumbers (){
    const subNumber1 = Number(document.querySelector('#subtract1').value);
    const subNumber2 = Number(document.querySelector('#subtract2').value);
    const diff = subtract(subNumber1, subNumber2);
    document.querySelector("#difference").value = diff;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

function multiplyNumber() {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);    
};


document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumber);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1/number2;


function divideNumber() {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumber);


/* Decision Structure */

function totals(){
    let sub = Number(document.querySelector("#subtotal").value);
    var box = document.getElementById("member");
    if (box.checked == true){
        sub -= sub * .15;
        document.querySelector("#total").innerHTML = `$${sub.toFixed(2)}`;
    } else{
        document.querySelector("#total").innerHTML = `$${sub.toFixed(2)}`;
    }
}

document.getElementById("getTotal").addEventListener("click", totals);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numArray;

/* Output Odds Only Array */

let odd = numArray.filter((num) => num % 2 != 0);
document.querySelector("#odds").innerHTML = odd;

/* Output Evens Only Array */

let even = numArray.filter((num) => num % 2 == 0);
document.querySelector("#evens").innerHTML = even;

/* Output Sum of Org. Array */

function sumofArray(beginning, add) {
    return beginning + add;
}

document.querySelector("#sumOfArray").innerHTML = numArray.reduce(sumofArray);

/* Output Multiplied by 2 Array */

function multArray(x){
    return x * 2;
}

document.querySelector("#multiplied").innerHTML = numArray.map(multArray);

/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = numArray.map(multArray).reduce(sumofArray);


