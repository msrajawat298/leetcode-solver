/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
     if (k > s.length) return false; // Cannot create more strings than available characters
    
    const charCount = new Array(26).fill(0); // Frequency array for 26 letters
    for (let char of s) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    let oddCount = 0;
    for (let count of charCount) {
        if (count % 2 !== 0) oddCount++;
    }
    
    // We can create k palindromes if oddCount <= k
    return oddCount <= k;
};