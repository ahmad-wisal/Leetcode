/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

    let count = 0;
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        // Use the remainder operator (%) to cleanly handle the wrap-around check 
        // between the last element and the first element at the very end of the loop
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
    }
    
    // If there is at most 1 break in the sorted chain, it's a valid rotated array
    return count <= 1;
    
};