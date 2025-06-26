function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Pseudocode:
  - Iterate through the array from start to end
  - For each element, iterate through the rest of the array
  - Check if the sum of the two elements equals the target
  - If yes, return true
  - If no pairs found after checking all, return false
*/

/*
  Explanation:
  The function uses a nested loop to check every possible pair of numbers in the array.
  It sums each pair and compares it to the target value.
  If any pair sums to the target, it returns true immediately.
  If no pairs match, it returns false after checking all pairs.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // 3 + 7 = 10

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // 19 + 6 = 25

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4)); // no pairs sum to 4

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3)); // -7 + 10 = 3

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5)); // 1 + 4 = 5 or 2 + 3 = 5

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4)); // 2 + 2 = 4

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4)); // only one element, no pairs

}

module.exports = hasTargetSum;
