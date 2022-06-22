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

function done(){
    console.log("Я прошел этот урок!");
}

learnJS("Javascript", done);

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function(){
        console.log("Testing");
    }
};
//first working method inner object
options.makeTest();

//destructurization operator
const {border, bg} = options.colors;

for (let key in options) {
    for (let i in options[key]){
        if (typeof(options[key]) == 'object'){
            console.log(`Свойство ${i} имеет свое значение ${options[key][i]}`);
        }else{
            console.log(`Свойство ${key} имеет свое значение ${options[key]}`);
        }
    }
}
//counter of amount of properties og Object
console.log(Object.keys(options).length);