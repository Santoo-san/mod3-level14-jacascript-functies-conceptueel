/* console.log("Hallo Winc Academy studenten");
//youtube mosh
//performing a task
function greet(name, lastname) {
  console.log("Hello " + name + " " + lastname);
}

greet("John", "Smith");
greet("Mary"); //undefined

//calculating a value

function square(number) {
  return number * number;
}

console.log(square(2));

//function declaration

function myFunction(parameters) {
  // function body
}

//function expression (anonieme functie)

const myFunction = function (parameters) {
  // function body
};

//arrow function (de arrow =>, het keyword 'function' vervangt, en in plaats van vóór de () , er juist áchter komt te staan.)

const myFunction = (parameters) => {
  // function body
}; */

//opdracht Javascript Functies (conceptueel)

console.log("Deel A");

/* maakEenBroodjeKaas
-pak een boterham.
-smeer er boter op.
-leg er een plakje kaas op.
 */
function maakEenBroodjeKaas() {
  console.log("pak een boterham");
  console.log("smeer er boter op");
  console.log("leg er een plakje kaas op");
}
maakEenBroodjeKaas();

// Deel B

console.log("Deel B");
function makeSandwich(topping) {
  //declaration
  console.log("There you go, a sandwich with", topping);
}
makeSandwich("kaas"); //call
makeSandwich("ham");

// Deel C

console.log("Deel C");

function calculateDiscountedPrice(totalAmount, discount) {
  return totalAmount - discount;
}

console.log(Math.round(calculateDiscountedPrice(24, 3.5)));

// Deel D

console.log("Deel D");

function checkDiscountedPrice(totalAmount, discount) {
  if (totalAmount > 25) {
    return totalAmount - discount;
  } else {
    return totalAmount;
  }
}
console.log("met korting");
console.log(Math.round(checkDiscountedPrice(26, 3.5)));
console.log("zonder korting");
console.log(Math.round(checkDiscountedPrice(24, 3.5)));
