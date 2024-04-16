function isPalindrome(word) {
  word = word.toLowerCase();
  
  //Creating 2 variables that compares the characters from the beginning and the end of the string.
  let fromLeft = 0;
  let fromRight = word.length - 1; 
  
  //We use while loop to continue checking whether the from Left is less than from Right.
  while (fromLeft < fromRight) {
    if(word[fromLeft] !== word[fromRight]) {
      return false;
    }
    fromLeft++; // We are moving from Left index forward by one position
    fromRight --; // We are moving from the Right index backward by one position
  }
  return true;
}

console.log(isPalindrome('abba'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('a'));
console.log(isPalindrome('robot'));
console.log(isPalindrome('ab'));




/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// We create a function that takes one argument - word 
// Convert the string to lowercase to ensure the comparison is case-insensitive
// The we create 2 variables that compares a specific word from left and the other from right
// Then use while loop to continue checking a specific word while from Left is less than from Right.
// create an if condition that checks if characters at the left and right indices are not the same to negate the string being palindrome
// Move the left index forward and the right index backward.
// If we complete the loop without finding any mismatched characters, it's a palindrome



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
