// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const wordA = parseWord(stringA);
    const wordB = parseWord(stringA);
    if (wordA.keys !== wordB.keys) {
        return false;
    } else {
        let valid = true;
        Object.keys(wordA.count).forEach(key => {
            console.log(wordA.count, wordB.count)         
            if (wordA.count[key] !== wordB.count[key]) {
                console.log(wordA.count[key], wordB.count[key])
                valid = false;
            }
        })
        return valid;
    }
}

function parseWord(word) {
    const preParse = word.replace(/[^\w]/g, '').toLowerCase();
    const count = {};
    let keys = 0;
    for (const char of preParse) {
        if (count[char]) count[char] + 1
        else {
            count[char] = 1;
            keys++;
        }
    }
    return {
        keys,
        count
    }
}

module.exports = anagrams;