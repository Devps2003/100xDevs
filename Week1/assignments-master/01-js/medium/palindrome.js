/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/\s/g, '');
  str = str.replace(/[^a-zA-Z ]/g, "");
  let str1 = str.toLowerCase();

  for(let i=0;i<str.length;i++){
    if(str1[i]!=str1[str.length-1-i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
