//Write a function that takes a string (a) as argument. Extract the first half a. Return the result

function myFunction(a) {
  let medium = Math.floor(a.length / 2);
  return a.slice(0, medium);
}
