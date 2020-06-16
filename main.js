/*******************************************************************************
 * Your code here!
 ******************************************************************************/

let num1 = getInput(0)
let num2 = getInput(1)
let num3 = getInput(2)

// if (getInput(0) % 3 === 0 && getInput(0) % 5 === 0) {
//   console.log('FizzBuzz') 
// }
// else if (getInput(0) % 3=== 0) {
//   console.log('Fizz')
// }
// else if (getInput(0) % 5 === 0) {
//   console.log("Buzz");
// }
// else (
//   console.log(getInput(0))
// )


if (num2 === undefined){
  num2 = 3
}
if (num3 === undefined) {
  num3 = 5
}
if (num1 % num2 === 0 && num1 % num3 === 0) {
  console.log('FizzBuzz') 
}
else if (num1 % num3 === 0) {
  console.log("Buzz");
}
else if (num1 % num2 === 0) {
  console.log('Fizz')
}
else (
  console.log(num1)
)

// // Without using else
// const num = getInput(0)

// if (num % 3 === 0 && num % 5 !==0) {
//   console.log('Fizz');
// }

// if (num % 5 === 0 && num % 3 !== 0) {
//   console.log('Buzz');
// }

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log('FizzBuzz');
// }

// if (num % 5 !== 0 && num % 3 !== 0) {
//   console.log(num);
// }





/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  So if the app was launched using the command `node main.js 5 8`, for example,
  5 would be the first argument, and 8 the second.

  Our helper function takes a number as a parameter and returns the argument
  with that index, as a string.

  If no argument with the given index was used when launching the app,
  undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string. Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined

  For most apps, you will need multiple inputs from the user, but for this 
  one, getInput(0) should be all you need.
 ******************************************************************************************/

function getInput(i) {
  return process.argv[i + 2];
}
