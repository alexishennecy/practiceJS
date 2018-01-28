var a = 5;
var b = 10;

if ( a < b ) {
   alert("Yes, a is less than b");
}

if ( a == b ) {
   alert("Yes, a is equal to b");
}


var balance = 5000;

if (balance >= 0 ) {
    alert("the balance is positive");
    if ( balance > 10000) {
        alert("the balance is large");
    }
} else {
    alert("the balance is negative");
}




var a = 123;
var b = "123"; //b is a string and is a different kind of data type than a number but JS is flexible and when using double equals to compare JS will read the number and the string as equal. To avoid this use the triple equal sign and JS evaluates the data type as well as the input text. In other words as far as JS is concerned, a and b are equal when written with a double equal sign to compare the values.

// equality check
if ( a == b ) {
   alert("Yes, they ARE equal");
} else {
   alert("No, they're NOT equal");
}


// logical and/or
if ( a === b && c === d ) //this is saying if a equals b AND c equals d
if ( a === b || c === d )  //this is saying if a equals b OR c equals d

//enclose the seperate conditions inside their own parenthesis to make it more readable
if ( (a > b) &&  (c < d) ) {

}


//This is an example of a use case for checking for specific values.
var grade = "Premium";

if ( grade === "Regular") {
     alert("It's $3.15");
}
if ( grade === "Premium") {
     alert("It's $3.35");
}
if ( grade === "Diesel") {
     alert("It's $3.47");
}

// checking a variable for a selection of very specific values you would use the switch statement.
//we are just replacing the word 'if' with 'switch' to make a more condensed way of writing it instead of the above example
//switch is looking at the variable and then inside the body of the switch statement we describe the different situations (cases) that we are looking for in order to then do something
//useful where there is a range of set values to check against

var grade = "Premium";

switch ( grade ) {
    case "Regular":
        alert("it's $3");
        break;
    case "Premium":
        alert("its $4");
        break;
    case "Diesel":
        alert("its $5");
        break;
    default:  
        alert("thats not a valid grade");
}
