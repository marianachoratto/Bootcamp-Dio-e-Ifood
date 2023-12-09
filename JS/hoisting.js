teste1()
teste2()


function teste1(){
    console.log('teste')
}

var teste2 = function (){
    console.log('teste')
}
//----------------------------------------

//Exemplo 1 - Não eleva (hoist)
var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y
//Isso não funcionará, pois o JavaScript apenas eleva declarações

//Example 2 - Hoists
var num1 = 3; //Declara e inicializa num1
num2 = 4; //Inicializa num2
console.log(num1 + " " + num2); //'3 4'
var num2; //Declara num2 para hoisting

//Example 3 - Hoists
a = "Cran"; //Inicializa a
b = "berry"; //Inicializa b
console.log(a + "" + b); // 'Cranberry'
var a, b; //Declara ambos a & b para hoisting
 
//---------------------------------------------------------
var va1

if (true){
    var1 = 10 
}

console.log(var1)
//-------------------------------------------------------

console.log(10 == '10')
console.log(10 === '10')

const x = Symbol('10')
const y = Symbol('10')

console.log(x === y)
