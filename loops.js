//LOOPS
//the for loop interates through something
//inside the curly braces is what we want to happen at each iteration
// for(var i = 0; i < 10; i++){
//     console.log("this is the number " + i);
// }

//the while loop
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }


//the for each loop, built to work with arrays
let numbers = [1, 3, 6, 9];
numbers.reverse();
// numbers.forEach(function(taco){
//     console.log(taco);
// });

//this is another way of writing the above function
for(var i = 0; i <numbers.length; i++){
    console.log(numbers[i]);
}


//CONDITIONALS
