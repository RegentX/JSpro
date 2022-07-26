/*jslint node: true */
'use strict';
let message;
const admin = 4;

//console.log(1);

//const result = confirm("Hey guys, wassup?");
//alert(result);

//const answer = prompt("What is ur age?", "");
//console.log(typeof(answer));
//all the info , which is gettin from user, is of string type
// "+" - retyping string to number

const answers = [];
//answers[0] = prompt("What is ur name?", "");
//answers[1] = prompt("What is ur male?", "");
//answers[2] = prompt("How old a u?", "");

//document.write(answers);

//console.log(typeof(answers));
//console.log(typeof(null));
// there is a mistale with a definition of type of null in JS

//`` - bacticks alt + 96

//const category = 'bears';
//const number = 6;
//console.log("https://someurl.com/" + category + "/" + "number");

//instead of such an inconvenient method u may use:
//console.log(`https://someurl.com/${category}/${number}`);

const user = prompt("What is ur name?");
alert(`Hi, ${user}!`);
//INTERPOLATION method

const num = 50;
(num == 50) ? console.log("Yeah") : console.log("Nope");
//ternary opearator ?
switch(num) {
    case 49:
        console.log("False");
        break;
    case 100:
        console.log("False");
        break;
    case 50:
        console.log("True");
        break;
    default:
        console.log("Not Today, sorry!");
        break;
}
// 3 THYPES OF FUNCTIONS
//Function DECLARATION - is visible everywhere
function calc(a,b){
    return a + b;
}
//Function EXPRESSION - is visibile rigorously after announcement
const calculator = function(a,b){
    return a * b;
};
//Function ARROW - is short in a length
let calcul = (a,b) => a/b;
//METHODS in JS
let str = "Hello";
console.log(str.toUpperCase());

//Command to check properties of objects is .dir()
//.indexOf searches the first appearence of determined letter in text
str.indexOf("l");
//.slice divide a word into determined pieces ~ .substring(which> dont support negative values)
str.slice(2,4);
str = "Hello world!";
console.log(str.substr(1,2));
//callback functions
function learnJS(lang, callback){
    console.log(`Я учу ${lang}`);
    callback();
}

// function done(){
//     console.log("Я прошел этот урок!");
// }

// learnJS("Javascript", done);

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function(){
//         console.log("Testing");
//     }
// };
// //first working method inner object
// options.makeTest();

// //destructurization operator
// const {border, bg} = options.colors;

// for (let key in options) {
//     for (let i in options[key]){
//         if (typeof(options[key]) == 'object'){
//             console.log(`Свойство ${i} имеет свое значение ${options[key][i]}`);
//         }else{
//             console.log(`Свойство ${key} имеет свое значение ${options[key]}`);
//         }
//     }
// }
// //counter of amount of properties og Object
// console.log(Object.keys(options).length);

// //arrays
// let arr = [2,4,5,6,67,8];
// arr.push(8);
// arr.pop();

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // for (let item of arr){
// //     console.log(item);
// // }
// //ctrl + / для комментария не несколько строк кода!!!

// // arr.forEach(function(elem, i, arr ){
// //     console.log(`${i} : ${elem} : in ${arr}`)
// // });

// const str2 = prompt("", "");
// const products = str2.split(", ");
// console.log(products);
// console.log(products.join("; "));

// let arr2 = [2,6,18,6,7,9];
// arr2.sort();
// console.log(arr2);
// arr2.sort(compareNum);
// console.log(arr2);

// function compareNum(a,b){
//     return a - b;
// }

// let a = 5,
//     b = 1;

// b = b + 5;
// console.log(a);
// console.log(b);

const obj = {
    l: 5,
    m: 1
};

// const copy = obj; //link to the existing obj

// copy.a = 10;

function copy2(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

// console.log(obj);
// console.log(copy);

const numbers = {
    a: 5,
    b: 10,
    c: {
        x: 9,
        y: "&"
    }
};

const newNumbers = copy2(numbers);

newNumbers.a = 88;
newNumbers.c.x = 300;

console.log(newNumbers);
console.log(numbers);
//we've made a superficial copy of obj, not a profound copy

console.log(Object.assign(numbers, obj));
//command of conjunction

// const lala = {
//     l: 7,
//     m: 9
// };

// const clone = Object.assign({}, lala);

// clone.l = 100;

// console.log(clone);
// console.log(lala);

const lala2 = [1, 2, 3];

const clone2 = lala2.slice();

clone2[1] = "djedejdiej";

console.log(clone2);
console.log(lala2);

let countries = ["germany", "canada", "portugal"],
    cities = ["moscow", "saint-petersburg", "london"],
    world = [...countries, ...cities, "EAEU", "EU"];
//spread operator unite all the arrays in one
    console.log(world);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num2 = [1, 4, 7];
log(...num2);

//spread operator is using like an operator of separation

const list = {
    a: "byak",
    b: "abyabyabyab"
};
//easy superficial copy of object
const newList = {...list};

console.log(newList);

//genesis of objects (old version)
const soldier = {
    health: 100,
    armour: 100,
    sayHello: function() {
        console.log("Hello, brat");
    }
};

const vanya = {
    health: 99
};

vanya.__proto__ = soldier;

console.log(vanya);
console.log(vanya.armour);
vanya.sayHello();
// new way to build a genesis of object
Object.setPrototypeOf(vanya, soldier);

const sergey = Object.create(soldier);