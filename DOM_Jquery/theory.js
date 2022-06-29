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

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// for (let i = 0; i < 8; i++) {
//     ctx.fillRect(i*10, i*10, i+10, i+10);
// }
// ctx.fillStyle = "white";
// ctx.fillRect(0,0,200,50);
// ctx.fillStyle = "black";
// ctx.fillRect(0,50,200,50);
// ctx.fillStyle = "#FFCC00";
// ctx.fillRect(0,100,200,50);
// ctx.fillRect(50,10,20,20);
// ctx.fillRect(57,30,5,10);
// ctx.fillRect(40,40,40,5);
// ctx.fillRect(47.5,45,25,30);
// ctx.fillRect(47.5,75,5,35);
// ctx.fillRect(67.5,75,5,35);

// ctx.strokeStyle = "DeepPink";
// ctx.lineWidth = 4;
// ctx.strokeRect(10,10,100,20);

// ctx.strokeStyle = "turquoise";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(60,60);
// ctx.moveTo(60,10);
// ctx.lineTo(10,60);
// ctx.stroke();
// //ЗАЛИВКА
// ctx.fill();
// ctx.beginPath();
// ctx.arc(100,50,20,0,Math.PI,true);
// ctx.stroke();

// let circle = function(x,y,radius) {
//     ctx.strokeStyle = "black";
//     ctx.beginPath();
//     ctx.arc(x,y,radius,0,Math.PI*2, false);
//     ctx.stroke();
// };

// ctx.lineWidth = 5;
// ctx.strokeStyle = "Red";
// circle(50,50,100);
// ctx.lineWidth = 5;
// ctx.strokeStyle = "blue";
// circle(50,50,75);
// ctx.lineWidth = 5;
// ctx.strokeStyle = "black";
// circle(50,50,50);

// $("canvas").mousemove(function (event) {
//     ctx.strokeStyle = "turquoise";
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.moveTo(event.pageX,event.pageY);  
//     ctx.lineTo(event.pageX,event.pageY);
//     ctx.stroke();
// });

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, Math.PI*2, false);
    if (fillCircle) {
        ctx.fill();
    }else{
        ctx.stroke();
    }
};

let drawBee = function(x, y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "gold";

    circle(x,y, 8, true);
    circle(x, y, 8, false);
    circle(x-5, y-11, 5, false);
    circle(x+5, y-11, 5, false);
    circle(x-2, y-1, 2, false);
    circle(x+2, y-1, 2, false);
};

let update = function(coordinate) {
    let offset = Math.random() * 4 - 2;
    coordinate += offset;

    if (coordinate > 200) {
        coordinate = 200;
    }
    if (coordinate < 0) {
        coordinate = 0;
    }

    return coordinate;
};

let x = 100;
let y = 100;

setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);

    drawBee(x, y);
    x = update(x);
    y = update(y);

    ctx.strokeRect(0, 0, 200, 200);
})