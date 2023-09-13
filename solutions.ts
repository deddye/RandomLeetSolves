//27. Remove Element
function removeElement(nums: number[], val: number): number {
    let count = 0;    

    nums.forEach(n => {
        if( n !== val ) nums[count++] = n
    })
    return count
};