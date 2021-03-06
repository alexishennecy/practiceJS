// //here is an example of a switch case
let fruit = "banana";

switch(fruit){
    case "banana":
        alert("I hate bananas");
        break;
    case "apple":
        alert("I love apples");
        break;
    case "orange":
        alert("I really like oranges");
        break;
    default:
        alert("I love all other fruits");
        break;
}

// //OBJECTS
// //object literal example, using json
// //can write functions within objects
let person = {
    firstName: "Alexis",
    lastName: "Blah",
    age: 31,
    children: ["Brianna", "Nick"],
    address: {
        street: "100 something street",
        city: "Boston",
        state: "MA"
    },
    fullName: function(){
        return this.firstName + " "+this.lastName;
    },
    fullAddress: function(){
        return this.address;
    } 
}

console.log(person.fullName());
console.log(person.fullAddress());



let animals = {
    type: "dog",
    personality: "happy", 
    name: ["ryker", "sloan", "max"],
    size: ["small", "medium", "large"],
    age: ["1 year", "5 to 10", "10 to 15"],
}
console.log(animals.name[0]);








//new object

let box = new Object();
box.color = "red";
box.shape = "square";


box.describe = function(){
    return "a box is the color "+this.color+" and is the shape "+this.shape;
}
box.alot = function(){
    return "this object is "+this.color+" and it is "+this.shape;
}
console.log(box.describe());
console.log(box.alot());





//object constructor

function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return "a " +this.name+ " is the color " +this.color+ " and is the shape " +this.shape;
    }
        
}

let apple = new Fruit("apple", "red", "round");
let melon = new Fruit("melon", "green", "round");
let banana = new Fruit("fruit", "yellow", "long");
console.log(melon.describe());
console.log(banana.describe());




function timesForAttraction(areas, time, type){
    this.areas = areas;
    this.time = time;
    this.type = type;
}
let firstHour = new timesForAttraction("1", "2", "rollercoaster");
console.log(firstHour.type);




// arrays of objects

let users = [
    {
        name: "John Doe",
        age: 30,
    },
    {
        name: "Mark Smith",
        age: 44,
    },
    {
        name: "Shelly Blue",
        age: 31
    },
    {
        name: "Brittany Bob",
        age: 22

    }
];

console.log(users[0].name);
console.log(users[1].age);
console.log(users[3]);




//EVENTS

function doClick(){
    alert("you clicked");
}



function changeText(){
    let heading = document.getElementById("heading").innerHTML = "you clicked";
}


function showDate(){
    let time = document.getElementById("time");
    time.innerHTML = Date();
}




//ARRAYS
//arrays are used to store multiple values in a single variable

var colors = ["red", " blue", " green"];
colors[3] = " black";
alert(colors);

//the push method
colors.push(" pink");
alert(colors);


//this is just another way that it can be written
var colors = new Array("red", "yellow", "orange");


var numbers = [1, 2, 3, 4, 5];
alert(numbers[0] + numbers[2]);


//methods and functions are the same thing, as well as properties and attributes
//this will give you the count of how many items are in the array, this is an example of a property
alert(numbers.length);

//this will sort the numbers by their value, sort is a method/function
alert(numbers.sort());

alert(numbers.reverse());


