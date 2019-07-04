// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//Easy
function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

//Harder
// function reverseInt(n) {
//     const numStr = n.toString();
//     let res = '';
//     for (let i = numStr.length - 1; i >= 0; i--) {
//         res += numStr[i];
//     }
//     return (n >= 0) ? parseInt(res) : parseInt(res) * -1;
// }

module.exports = reverseInt;