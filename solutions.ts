//27. Remove Element
// function removeElement(nums: number[], val: number): number {
//     let count = 0;    

//     nums.forEach(n => {
//         if( n !== val ) nums[count++] = n
//     })
//     return count
// };

//169. Majority Element
// function majorityElement(nums: number[]): number {

//     if (nums.length === 1) { return nums[0] };

//     let map = new Map<number, number>();
//     let r = 0;
//     nums.forEach(n => {
//         if (map.has(n)) {
//             let value: number | undefined = map.get(n)
//             if(typeof value !== "undefined"){
//                 if ( value + 1 > nums.length / 2) {
//                     r = n;
//                 }
//                 map.set(n, value + 1)
//             }
//         }
//         else {
//             map.set(n, 1);
//         }
//     })

//     return r;
// };