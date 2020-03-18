'use strict';

let string = 'The quick brown fox jumped over the lazy dog';

const findLongestWord = function(string) {
  let arrayOfStrings = string.split(' ');
  let longestWord = arrayOfStrings[0];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > longestWord.length) {
      longestWord = arrayOfStrings[i];
    }
  }

  return longestWord;
};
console.log(findLongestWord(string));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
