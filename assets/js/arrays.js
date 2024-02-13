//pop
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// Expected output: "tomato"
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
//POP fjerner den sidste object i arrayet


//puch
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
//PUCH bruges til at tilføje en eller flere objekter til arrayet.


//shift
const array1 = [1, 2, 3, 4, 5];
const firstElement = array1.shift();
console.log(array1);
// Expected output: Array [2, 3, 4, 5]
console.log(firstElement);
// Expected output: 1
//SHIFT fjerner den første objekt i arrayet.


//unshift
const array2 = [1, 2, 3];
console.log(array2.unshift(4, 5));
// Expected output: 5
console.log(array2);
// Expected output: Array [4, 5, 1, 2, 3]
//UNSHIFT bruges til at tilføje et eller flere objekter til forreste arrayet


//slice
const MyAnimals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(MyAnimals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(MyAnimals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(MyAnimals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(MyAnimals.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(MyAnimals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(MyAnimals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
//SLICE bruges til at crop objekter fram arrayet.


//forEach
const array3 = ['a', 'b', 'c'];
array3.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
//forEach viser aller objekter i hvert linje.