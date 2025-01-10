/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    // Helper function to count character frequencies
    const countChars = (word) => {
        const count = new Array(26).fill(0);
        for (let char of word) {
            count[char.charCodeAt(0) - 97]++;
        }
        return count;
    };

    // Step 1: Calculate maximum character requirements for words2
    const maxFreq = new Array(26).fill(0);
    for (let word of words2) {
        const count = countChars(word);
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], count[i]);
        }
    }

    // Step 2: Filter words1
    const result = [];
    for (let word of words1) {
        const count = countChars(word);
        let isUniversal = true;
        for (let i = 0; i < 26; i++) {
            if (count[i] < maxFreq[i]) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) {
            result.push(word);
        }
    }

    return result;
};