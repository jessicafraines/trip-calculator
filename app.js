var prompt = require('sync-prompt').prompt;
var distance = prompt("How far will you drive in miles?")
var price = prompt("How much is gas per gallon?")
var tank = prompt("How big is your gas tank?")
var mpg = prompt("What is your vehicles MPG rating?")
var speed = prompt("How fast are you going to drive?")
var vehicle = prompt("What type of vehicle do you have (car/truck)?")

distance = parseInt(distance);
price = parseFloat(price);
tank = parseInt(tank);
mpg = parseInt(mpg);
speed = parseInt(speed);

if(speed > 55){
  var delta = speed - 55;

  if(vehicle === 'truck'){
    delta *= 3;
  }
  mpg-= delta;

  if(mpg < 10){
    mpg = 10;
  }
}

var gas = distance / mpg;
var cost = gas * price;
var stops = gas / tank;

console.log('To drive ' + distance + ' miles, it will cost you $' + cost.toFixed(2) + ', and you will have to make ' + Math.ceil(stops) + ' stops.');






