/* eslint-disable no-undef */
// Write a simple and efficient Javascript program that returns the smallest non-occurring
// integer in a given Array.
// E.g: Given an Array1 = [1, 3, 6, 4, 1, 2] returns 5, and Array2 = [5, -1, -3] returns 1.

const A = [-1, -4];
function smallestNonRecurringNumber(A) {
    let max = A.reduce((acc, val) => acc > val ? acc : val);
    let missing = 1;
    for (let i = max + 1; i > 0; i--) {
        found = A.find(el => el == i);
        if(found === undefined) {
            missing = i;
        }
    }
    return missing; 
}
console.log(smallestNonRecurringNumber(A));