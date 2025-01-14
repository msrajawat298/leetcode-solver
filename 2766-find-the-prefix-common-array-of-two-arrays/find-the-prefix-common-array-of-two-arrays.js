/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function findThePrefixCommonArray(A, B) {
    const n = A.length;
    const setA = new Set();
    const setB = new Set();
    const C = new Array(n).fill(0);
    
    let commonCount = 0;
    
    for (let i = 0; i < n; i++) {
        // Add current elements to respective sets
        if (setB.has(A[i])) commonCount++;
        setA.add(A[i]);
        
        if (setA.has(B[i])) commonCount++;
        setB.add(B[i]);
        
        // Update the result array
        C[i] = commonCount;
    }
    
    return C;
}
