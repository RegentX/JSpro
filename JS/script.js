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
