// function addTwoNumbers(a, b) {
//     let result = a + b;
//     alert(result);
// }

// addTwoNumbers(5, 10);
// addTwoNumbers(20, 10);
// addTwoNumbers(200, 200);



function putGradesHere(a, b) {
    let result = a * b;
    return result;
}    

// have to create a new variable and set it equal to whatever happens whenever I call the function. and this variable is calling the function and passing in the parameters to execute the function.
let multiplyAction = putGradesHere(10, 19);
console.log(multiplyAction);

let anotherName = putGradesHere(100, 1000);
console.log(anotherName);

let thatWord = putGradesHere(2, 22);
console.log(thatWord);


function putWordHere(a, b) {
    let result = a - b;
    return result;
}

let nextStep = putWordHere(2000, 200);
console.log(nextStep);
