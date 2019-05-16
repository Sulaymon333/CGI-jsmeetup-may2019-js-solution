// CGI COMPETITION JS Meet up 14.05.2019 js questions' solutions

// 1.
function hello(string) {
  return string;
}
console.log(hello('WORLD'));

// 2.
function average(numArray) {
  return numArray.reduce((total, value) => total + value, 0) / numArray.length;
}
console.log(average([2, 3, 5, 2]));

// 3.
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

// 4.
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

// 5.
function traverse(root) {}

traverse(4);

// 6.
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

// 7. flatten an array
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
