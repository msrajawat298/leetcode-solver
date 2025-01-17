/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    const n = derived.length;

    // We can try starting with original[0] = 0 and original[0] = 1
    for (let start = 0; start <= 1; start++) {
        const original = new Array(n);
        original[0] = start;

        let possible = true;
        for (let i = 0; i < n - 1; i++) {
            original[i + 1] = original[i] ^ derived[i];
        }

        if ((original[n - 1] ^ original[0]) === derived[n - 1]) {
            return true; // Found a valid original array
        }
    }

    return false; // No valid original array found
};