/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
     let setBitsNum2 = num2.toString(2).split('1').length - 1;

    // Array to hold the bits of the result
    let x = 0;

    // Prioritize the bits of num1
    for (let i = 31; i >= 0 && setBitsNum2 > 0; i--) {
        if ((num1 & (1 << i)) !== 0) {
            x |= (1 << i); // Set this bit in x
            setBitsNum2--; // Decrease the remaining set bits to assign
        }
    }

    // If there are still set bits to assign, use lower-order unset bits
    for (let i = 0; i <= 31 && setBitsNum2 > 0; i++) {
        if ((x & (1 << i)) === 0) {
            x |= (1 << i); // Set this bit in x
            setBitsNum2--; // Decrease the remaining set bits to assign
        }
    }

    return x;
};