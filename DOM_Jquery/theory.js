/*jslint node: true */
"use strict";
// let headelem = document.getElementById("main-heading");
// console.log(headelem.innerHTML);
// let newHead = prompt("Input a new heading: ");
//USUAL CHANGE ELEMENTS
// headelem.innerHTML = newHead;
// console.log(headelem.innerHTML);
//JQUERY CHANGE ELEMENTS
// $("#main-heading").text(newHead);
// $("body").append("<p>This is a new paragraph. </p>");
// $("h1").fadeOut(3000);
// $("h1").slideUp(1000).slideDown(1500);
// for (let i = 0; i < 5; i++){
//     $("h1").fadeOut(1000);
//     $("h1").fadeIn(1000);
// }
// $("p").show(15000);
// $("p").hide(2000);
// $("p").show(15000);

// setTimeout(function () {
//     console.log("blablabla");
// }, 1000);

// let timeUp = function () {
//     alert("Time is up!");
// };

// let warn = setTimeout(timeUp, 3000);
// clearTimeout(warn);

// let min; let sec; let hou;

// let counter = function() {
//     sec++;
//     console.log(`Time is ${sec}:${min}:${hou}`);
// };

// let counter2 = function() {
//     min++;
// };

// let counter3 = function() {
//     min++;
// };
// sec = 0; min = 0; hou = 0;
// while (hou < 60) {
//     counter2();
//     min = 0;
//     while (min < 60) {
//         sec = 0;
//         while (sec < 60) {
//             setInterval(counter, 1000);

//         }
//         counter3();
//     } 
// }

// console.log("hhh");
//CLICK HANDLER
// let clickHandler = function(event) {
//     console.log("Click! " + event.pageX + " " + event.pageY);
// };
// $('h1').click(clickHandler);

// $("html").mousemove(function (event) {
//     $("h1").offset(({
//         left: event.pageX,
//         top: event.pageY
//     }));
// });

// let leftOffset = 0;
// let topOffset = 0;

// let moveHeading = function() {
//     $("h1").offset({left: leftOffset, top: topOffset});
//     if (leftOffset <= 200 && topOffset == 0) {
//         leftOffset++;
//     }
//     if (leftOffset == 200 && topOffset <= 200) {
//         topOffset++;
//     }
//     if(leftOffset >= 0 && topOffset == 200) {
//         leftOffset--;
//     }
//     if(leftOffset == 0 && topOffset >= 0) {
//         topOffset--;
//     }
// };

// let on = setInterval(moveHeading, 10);
// let click = 0;
// $("html").click(function (event) {
//     click++;
//     if (click%2==1){
//         clearInterval(on);
//     }else if(click%2==0){
//         on = setInterval(moveHeading, 10);
//     }
// });

// $("h1").click(function(event) {
//     if (click == 1) {
//         alert("Keep goin!");
//     }else if(click == 2){
//         alert("U are almost winner!");
//     }else if(click == 3){
//         ("Beast!");
//     }
// });

