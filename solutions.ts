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

//189. Rotate Array Right

//  function rotate(nums: number[], k: number): void {
//     while(k--) {
//         let num = nums.pop()
//         if (typeof num !== 'undefined')
//             nums.unshift(num)
//     };
// };

//55. Jump Game
// function canJump(nums: number[]): boolean {
//     let idx = nums[0]
//     for(let i = 1; i < nums.length; i++) {
//         if(idx == 0) {
//             return false
//         }
//         idx = Math.max(idx - 1, nums[i])
//     }
//     return true
// };

//125. Valid Palindrome

// function isPalindrome(s: string): boolean {

//     let mid = s.length / 2;

//     let idx = 0;
//     s = s.toLowerCase();

//     s = s.split(/\W+/).join('');
//     s = s.split('_').join('');

//     while (idx < mid) {
//         if ( s[idx] === s[s.length - (idx + 1)]) {
//             idx++;
//         }
//         else {
//             return false;
//         }
//     }

//     return true;
// };

//11. Container with Most Water

// function maxArea(height: number[]): number {
//   let left = 0;
//   let right = height.length - 1;

//   let max = 0;

//   while (left < right) {
//     let area = (right - left) * Math.min(height[left], height[right]);
//     max = Math.max(max, area);

//     if (height[left] < height[right]) left++;
//     else right--;
//   }
//   return max;
// }
