// CGI COMPETITION JS Meet up 14.05.2019 js questions' solutions

/* Challenge 1
   Implement hello() -function that returns string ‘Hello CGI’.
*/
function hello(string) {
  return string;
}
console.log(hello('Hello CGI'));

/* Challenge 2
   Implement avg(numArray) -function that calculates the average of the table items. 
   Items in the numArray are numbers.
*/
function average(numArray) {
  return numArray.reduce((total, value) => total + value, 0) / numArray.length;
}
console.log(average([2, 3, 5, 2]));

/* Challenge 3
   Implement reverse(wordsString) -function that gets a string as a parameter 
   and returns a string with the words in the reverse order.
*/
function reverse(string) {
  string = string.split('');
  // const reverseArray = [];
  // for (let i = string.length - 1; i >= 0; i--) {
  //   reverseArray.push(string[i]);
  // }
  // return reverseArray.join('');
  return string.reverse().join('');
}
console.log(reverse('milk')); // klim

/* Challenge 4
   Implement validate(anyValue) -function that validates a parameter. 
   If parameter value is integer and value is between 1 and 10, it should return true. 
   In other cases it should return false.
*/
function validate(anyValue) {
  let parameter;
  if (Number.isInteger(anyValue) && anyValue > 0 && anyValue <= 10) {
    parameter = true;
  } else {
    parameter = false;
  }
  return parameter;
}
console.log(validate(2.6));

/* Challenge 5
   Implement traverse(root) -function that traverses a binary tree and calculates a sum of value attributes.
   Each node have three attributes: value, left, right. Type of value attribute is a number.
*/
function traverse(root) {}

traverse(4);

/* Challenge 6
   Implement cgiSort(wordArray) -function that gets string array as a parameter and returns sorted array. 
   Order should be alphabetical but if there is word ‘CGI’ it should be first.
*/
function cgiSort(wordArray) {
  const sortedWordArray = wordArray.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  if (wordArray.includes('CGI')) {
    ['CGI', ...sortedWordArray];
  }
  return sortedWordArray;
}
console.log(cgiSort(['you', 'CGI', 'THEM', 'me', 'ab']));

/* 7 Challenge
   Implement arrayJoin(twoDimensionalArray1, twoDimensionalArray2) -function that joins 
   two dimensional arrays provided as parameters. Join type should be LEFT (similar to SQL LEFT JOIN). 
   Implement join based on row numbers (join row 1 to row 1, row 2 to row 2 etc.).
*/
function arrayJoin(twoDimensionalArray1, twoDimensionalArray2) {
  const joinedArray = [];
  for (let i = 0; i < twoDimensionalArray1.length; i++) {
    joinedArray.push([...twoDimensionalArray1[i], ...twoDimensionalArray2[i]]);
  }
  return joinedArray;
}

const twoDimensionalArray1 = [[1, 2], [3, 4], [5, 6]];
const twoDimensionalArray2 = [[4, 2], [8, 9], [1, 3]];
console.log(arrayJoin(twoDimensionalArray1, twoDimensionalArray2));
