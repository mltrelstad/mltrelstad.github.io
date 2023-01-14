var name = window.prompt("Enter your name: ");
alert(`Hello ${name}!`);

var myFavNum = window.prompt("Enter your favorite number: ");

const Pi = 3.1415926;

document.getElementById("name").innerHTML = "<b>Name: </b>" + name;
document.getElementById("myFavNum").innerHTML = "<b>Radius: </b>" + myFavNum;

var myArea = myFavNum * myFavNum * Pi;

document.getElementById("myArea").innerHTML = "<b>Area of circle: </b>" + myArea;


console.log(`Hello ${name}`);
console.log(`Your favorite number is ${myFavNum}`);
console.log(`The area of this cirle is ${myArea}`);

alert(`Hello ${name}, you entered ${myFavNum} as your favorite number. 
If that was the radius of a circle, the circle's area would be ${myArea}.`);