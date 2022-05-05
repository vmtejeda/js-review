/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
//let team = "Awesome";

// 2.) Change the value of this variable
//team = "Awesome Team";

// 3.) Change the data type of this variable
//team = 4;

// 4.) Create another variable and the one from above to concatenate
//let awesomeTeam = "Team of " + team;

//console.log (awesomeTeam)

// 5.) Use any of the variables above or create new ones and print using string interpolation
//console.log (`Our awesome team is a ${awesomeTeam}`);

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
//const name1 = 'Sabrina';

// console.log(name1.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

let name2 = 'Teddy'
//console.log (name2.charCodeAt(2));

//let charCode = name2.charCodeAt(2);

//Using fromCharCode() - make it readable for us :). You'll see!

//let name3 = 'I making it readable - "I Think"!!'
//console.log(String.fromCharCode(189, 43, 190, 61));

//console.log(String.fromCharCode(charCode));
/* This method returns a string and not a String object.

//Because fromCharCode() is a static method of String, you always use it as String.fromCharCode(), rather than as a method of a String object you created.*/

// Take your first and last name and concat()

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let firstName = "Poornima";
let lastName= "Somanathan";
let fullName = firstName.concat(' ',lastName);
//console.log(fullName);

// Create a string and make it return true using startsWith()
//The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
//console.log(fullName.startsWith('P'));


// Now use any variable with endsWith() and return false
//The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

//console.log(fullName.endsWith('an' , 14));

// Finish the following sentence. Use includes() and return true.
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const ozgur = 'Once upon a time Ozgur looked up at the Moon,';
let ozgur1 = ozgur + ' and drank in the beauty of it!';
//console.log(ozgur1.includes('drank'));

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

//console.log(joshHadALittleLambOopsCow.indexOf('cow'));

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

// const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."


// let storeIndex = vanessa.lastIndexOf('Vanessa');
// console.log (storeIndex);

// let laserBeam = vanessa.slice(storeIndex, 46);
// //console.log(vanessa.replace(vanessa.lastIndexOf('Vanessa'), '  '))

// const replaced = vanessa.substring(0, storeIndex) + vanessa.substring(storeIndex + laserBeam.length);
// console.log(replaced);

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
//console.log(noWeCantTeo.length);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
//console.log(replaceGokuWithVegeta.replace('Goku' , 'Vegeta'));

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
//console.log(joshIsLookingForWifey.search('wifey'));

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
//console.log(pizzaSentence.slice(7));

// Now using the pizza sentence, return only pizza (before the comma)
//console.log(pizzaSentence.slice(0, 5))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"

// let arrSplitTheBill = splitTheBill.split(',');
// console.log(arrSplitTheBill);

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.

let arrSplitTheBill = splitTheBill.split('');
//console.log(arrSplitTheBill);


// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
//console.log(angry.toLowerCase());

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
//console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
//console.log(basicGreeting.substring(1,4));

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
//console.log(ohReally.substring(0,10))

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
let index = aslDays.indexOf('a')
//console.log(aslDays.substring(index))

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides

//let str = "        Come closer!!!! I need some Love :-)         "
//console.log(str);
//console.log(str.trim());

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

// console.log(a < b);
// console.log(c > b);
// console.log(d == d);
// console.log(d != a);
// console.log(a < 15);
// console.log(a > b < c);
// console.log(c > b > a != d);

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.


// for (let i =0; i < 10; i++){
//    console.log("Spinning Ken's room", i+1);
// }

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

// for (let i =0; i < 20; i++){
//   console.log("Spinning Teo's vision", i+1);
// }

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.



// let i=0;
// while(i <20){
//   console.log("I'm sorry", i+1);
//   i++

// }

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// FOR...IN:
// Syntax:
// for (variable in object) {
//   statement
// }

// FOR...OF:
// for (variable of iterable) {
//   statement
// }

// let world = 'Hello World';
// for ( d in world){

//   console.log('There is o', d);
// }



// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clotes',
  thing3: 'gaming console'
}
//Solution1:
// for (property in whateverQueenBeySaid){
//   console.log(property)
// }


//to store a empty str
// let text = "";

// // to loop thru whateverQueenBeySaid
// for (let x in whateverQueenBeySaid){

//   // add each property of whateverQueenBeySaid to text str variable.
//   text += whateverQueenBeySaid[x] + " ";
// }

// // Print new text with whateverQueenBeySaid properties
// console.log(text);


// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']

// for (property in lana){
//   console.log(property);
// }

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

// for (property of tia){
//   console.log(property);
// }

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
// perscholas.forEach(conCat)

// function conCat(x){
//   console.log('ps '+ x );
// }

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do

// push():
// The push() method adds one or more elements to the end of an array and returns the new length of the array.


// pop()
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.


// unshift()
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.


// shift()
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.


// concat()
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.


// splice()
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

// slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.


// indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// length
//The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

const fruits = ['apple', 'banana', 'orange']

// Print banana
//console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
joinElements =fruits.join(' ')
//console.log(joinElements);


// Remove orange
fruits.pop();
//console.log(fruits);

// Add strawberry, kiwi, and grapes at the end
fruits.push('strawberry', 'kiwi', 'grapes');
//console.log(fruits);


// Remove apple
fruits.shift();
//console.log(fruits);


// Add mango at the beginning of the array
fruits.unshift('mango');
//console.log(fruits);

// Add lemon, and grapefruit between mango and banana
fruits.splice(1,0 , 'lemon', 'grapefruit');
//console.log(fruits);

// Remove banana and strawberry
fruits.splice(3,2);
//console.log(fruits);

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
let exoticFruits = ['Dragon Fruit', 'Jack Fruit', 'papaya'];
let concatFruits = fruits.concat(exoticFruits);
//console.log(concatFruits);

// Print the last two exotic fruits without altering the newly concatenated array.
//console.log(concatFruits.slice(concatFruits.length - 2));


// Monalissa said she needs help re-organizing her items in alphabetical order.
//const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"];
//monalissaIsMessy.sort();
//console.log(monalissaIsMessy);


// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
mirrorMirrorOnTheWall.reverse();
//console.log(mirrorMirrorOnTheWall);


// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 

const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."

let arrOfNoBaddWords = RafaelNoBadWords.split(' ');
//console.log(arrOfNoBaddWords);
let noBadWords = (arrOfNoBaddWords.filter(word =>  word !== 'badword')); let strRafaelNoBadWords= noBadWords.join(" ");
console.log(strRafaelNoBadWords);


// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
//console.log(numbersToAddUp.reduce(function add(x,y){
//   return x+y;
// }));

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
//let spreadVariable = ['Hello','World','Good','Morning'];
//let spreadOperator = [...spreadVariable];
//console.log(spreadOperator);


// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"];
let spreadVariable = ['Hello','World','Good','Morning'];
let connectArray = [...monalissaIsMessy,...spreadVariable];
// console.log(connectArray);


// Using the variable with the newly connected arrays, use spread operator to add something at the end.
newArray = ['lets','clean']
//connectArray.push(...newArray);
//console.log(connectArray);


// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
// connectArray.unshift(...newArray);
// console.log(connectArray);

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
//console.log(donutShop[1][0][1]);


// Tosi wants ihatethis. :) Print!
// console.log(donutShop[1][0][1]);

// console.log(donutShop[2][0][0][1]);
3:00
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!

// let Teo ='person';
// if (Teo === 'person'){
//   console.log(`Teo is a ${Teo}!`);
// }else {
//   console.log(`Teo is not a ${Teo}!`);
// }



// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// let Teo ='person';
// let genderTeo = 'male';
// if(Teo === 'person' && genderTeo === 'male'){
//   console.log('You got it right!');
// } else {
//   console.log('Wrong. Teo is going to remove you from the class.');
// }


// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

// let Teo ='person';
// let genderTeo = 'male';
// let hungry = false;
// if(Teo === 'person' && genderTeo === 'male'){
//   console.log('You got it right!');
//   if(hungry === true){
//     console.log("Let's buy Teo some tacos!")
//   } else {
//     console.log('If Teo is not hungry, am I hungry?');
//   }
// } else {
//   console.log('Wrong. Teo is going to remove you from the class.');
// }


// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

// let gustavoCool = true;
// gustavoCool? console.log('You got that right!') : console.log("James wants to argue. He says he's the best!");

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'

// function sayGreeting(){
//   console.log("Hello, ma'amsir!");
// }
// sayGreeting();



// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.

// function takeStr(str){
//   console.log(`This is my ${str}`);
// }
// takeStr('Hmmmmmmm');

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.

// function add(x,y,z){
//   console.log('The Total is' , x+y+z);
// }
// let a1= 5;
// let b1= 6;
// let c1= 7;

// add(a1,b1,c1);



// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts


// function fightClub(name){
//   if (name === 'Teo'){
//     return '1st rule: You do not talk about Fight Club.'
//   } else if(name === 'Manara') {
//     return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
//   } else if(name === 'Liv'){
//     return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
//   }else if(name === 'Devin'){
//     return '4th rule: Only two guys to a fight.';
//   }else {
//     return 'No Shirts';
//   }
// }

// let result = fightClub('Liv')
// console.log(result);



// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.

// function hello(){
//   console.log("Hello");
//   return function anonymous(){
//     console.log('GoodBye');
//   }
// }

// hello()();


// Create a function expression with your first name as the variable and then print your first and last name

// function firstName1(a,b){
//   console.log(`My name is ${a} ${b}.`);
// }
// firstName1('Poornima','Somanathan');


// Create an arrow function that accepts a number and have it return that number doubled
 
// let doubled = num => num * 2;
// console.log(doubled(2));


// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

let human = {
  namer: 'Poornima',
  age: 40,
  location: 'Dallas'
}

// Access the name using dot notation
//console.log(human.namer)

// Access the age using square brackets
//console.log(human['age']);

// Use object destructuring to access location
//let destructuring = human.location;
const {location} = human;
location;
console.log(location);
// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
//console.log(bulbasaur.abilities[0]);


// Print cut
//console.log(bulbasaur.moves[2]);

// Print Bulbahhhh!!!!!
//bulbasaur.sound();

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;
//console.log(bulbasaur)

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur.property = [1];
//console.log(bulbasaur)


// Print an array that contains every single properties in bulbasaur
//console.log(Object.getOwnPropertyNames(bulbasaur));

// Print every single properties one by one in the console
//Object.getOwnPropertyNames(bulbasaur).forEach(property => console.log(property));

// Print an array that contains every single values in bulbasaur
//console.log(Object.values(bulbasaur));



