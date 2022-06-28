/*jslint node: true */
"use strict";
let getRandomNumber = function(size) {
    return Math.floor(Math.random()*size);
};

let getDistance = function(event,target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(diffX^2 + diffY^2);
};

let getDistanceHint = function(distance) {
    if (distance < 10) {
        return "VERY HOT";
    }else if (distance < 20) {
        return "HOT";
    }else if (distance < 40) {
        return "HMM warm";
    }else if (distance < 80) {
        return "warm";
    }else if (distance < 160) {
        return "Cold";
    }else if (distance < 320) {
        return "Very COLD";
    }else{
        return "GG";
    }
};

var map = document.querySelector('#map');
let width = map.getAttribute('width');
let height = map.getAttribute('height');
let clicks = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$('#map').click(function (event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);

    $('#distance').text(distanceHint);
    
    if (distance < 8) {
        alert(`Treasure is founded! There are ${clicks} made!`);
    }
});