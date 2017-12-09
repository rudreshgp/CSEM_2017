/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    var first = -1;
    var second = -1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > second && nums[i] > first) {
            second = first;
            first = nums[i];
        }
        else if (second < nums[i] && nums[i] < first) {
            second = nums[i];
        }
    }
    return second == -1 ? null : second;
}