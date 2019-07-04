// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let isAPalindrome = true;
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - 1 - i]) isAPalindrome = false;
    }
    return isAPalindrome;
}

module.exports = palindrome;