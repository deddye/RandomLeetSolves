class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

//

// 1768. Merge Strings Alternately
// function mergeAlternately(word1: string, word2: string): string {
//   let length = Math.min(word1.length, word2.length);
//   let ans = "";
//   let i = 0;
//   for (i; i < length; i++) {
//     ans += word1[i];
//     ans += word2[i];
//   }
//   ans += word1.substring(i);
//   ans += word2.substring(i);

//   return ans;
// }

//101. Symmetric Tree
// function isSymmetric(root: TreeNode | null): boolean {
//   const checkMirror = (n1: TreeNode | null, n2: TreeNode | null): boolean => {
//     if (n1 === null && n2 === null) return true;
//     if (n1 === null || n2 === null) return false;

//     return (
//       n1.val === n2.val &&
//       checkMirror(n1.left, n2.right) &&
//       checkMirror(n1.right, n2.left)
//     );
//   };
//   return checkMirror(root, root);
// }

//226. Invert Binary Tree
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (root === null)
//         return root;
//     let temp: TreeNode = root.left;

//     root.left = root.right;
//     root.right = temp;

//     invertTree(root.left);
//     invertTree(root.right);

//     return root;
// };

//Implement a stack

// class MinStack {
//   min = 0;
//   stack: number[] = [];
//   constructor() {}

//   push(val: number): void {
//     this.stack.push(val);
//     if (this.stack.length === 1) {
//       this.min = val;
//     }
//     if (val < this.min) {
//       this.min = val;
//     }
//   }

//   pop(): void {
//     this.stack.pop();
//     this.min = Math.min(...this.stack);
//   }

//   top(): number {
//     return this.stack[this.stack.length - 1];
//   }

//   getMin(): number {
//     return this.min;
//   }
// }

//392. Is Subsequence
// function isSubsequence(s: string, t: string): boolean {
//   let i = 0;
//   let j = 0;
//   while (i < s.length && j < t.length) {
//     if (s[i] === t[j]) {
//       i++;
//       j++;
//       continue;
//     }
//     j++;
//   }

//   return i === s.length;
// }

//26. Remove duplicates from sorted array
// function removeDuplicates(nums: number[]): number {
//   let k = 1;
// let s: number[] = [];
// nums = nums.filter((value) => {
//   if (!s.includes(value)) {
//     count++;
//     s.push(value);
//   }
//   return !s.includes(value);
// });

// for (let i = 0; i < nums.length; i++) {
//   if (s.includes(nums[i])) {
//     continue;
//   }
//   s.push(nums[i]);
//   count++;
// }

// console.log(s);
// nums = s;
// return count;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return k;
// }

//3 Longest substring without repeating characters
// function lengthOfLongestSubstring(s: string): number {
//   let longest = 0;

//   let substring: string[] = [];

//   for (const c of s) {
//     if (!substring.includes(c)) {
//       substring.push(c);
//     } else if (substring.includes(c)) {

//       substring = substring.splice(substring.indexOf(c) + 1);
//       substring.push(c);

//     }
//     if (substring.length > longest) longest = substring.length;
//   }
//   return longest;
// }

//135. Min SubArray

// function minSubArrayLen(target: number, nums: number[]): number {

//   let left = 0;
//   let answer = Infinity;
//   let sum = 0;

//   for (let right = 0; right < nums.length;right++) {

//     sum+=nums[right];

//     if (sum < target ) continue;

//     while (sum-nums[left] >= target) {
//       sum -= nums[left];
//       left++;
//     }
//     answer = Math.min(answer, right-left+1);

//   }

//   return answer === Infinity ? 0 : answer;
// };

//104 Max Depth Binary Tree

/**
 * RECURSION: make some function that takes the things to recurse,
 * and a counter or whatever you need
 *
 * go through left and right subtree
 *
 * check for null node to stop and check values of what to count
 */

// function maxDepth(root: TreeNode | null): number {
//     let maxDepth = 0;

//   const recursve = (node: TreeNode | null | undefined, depth: number) => {
//     if(!node) {
//           maxDepth = Math.max(maxDepth, depth - 1);
//     return;
//     }
//     recursve(node?.left, depth + 1);
//     recursve(node?.right, depth + 1);
//   };

//   recursve(root, 1);
//   return maxDepth;
// };

// 191. number of 1 bits
// function hammingWeight(n: number): number {
//   let i = 32;
//   let count = 0;

//   while (i >= 0) {
//     if ((n & 1) === 1) {
//       count++;
//     }
//     n >>= 1;
//     i--;
//   }
//   return count;
// }

//35. Search Inset Position in O(logn)

// function searchInsert(nums: number[], target: number): number {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
//   return nums.length;
// }

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
