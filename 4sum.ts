function twoSum(
    sortedNums: number[],
    left: number,
    right: number,
    a: number,
    fixed:number,
    solutionArray: number[][],
    target:number
) {
    while (left < right) {
        const sum = sortedNums[left] + sortedNums[right] + a+sortedNums[fixed];

        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            solutionArray.push([sortedNums[fixed],a, sortedNums[left], sortedNums[right],]);
            left++;
            right--;

            while (left < right && sortedNums[left] === sortedNums[left - 1]) left++;
            while (left < right && sortedNums[right] === sortedNums[right + 1]) right--;
        }
    }
}

function threeSum(sortedNums: number[],pointer:number,fixed:number,solutionArray:number[][],target:number): void {
    while (pointer < sortedNums.length - 2) {
        const a = sortedNums[pointer];        // skip duplicates
        if (pointer > fixed+1  && sortedNums[pointer] === sortedNums[pointer - 1]) {
            pointer++;
            continue;
        }

        twoSum(sortedNums, pointer + 1, sortedNums.length - 1, a,fixed, solutionArray,target);

        pointer++;
    }
    return 
}


function fourSum(nums: number[], target: number): number[][] {
    const solutionArray: number[][] = [];
    const sortedNums = nums.sort((a, b) => a - b);
    let fixed:number=0

    while (fixed < sortedNums.length - 3) {
    if (fixed > 0 && sortedNums[fixed] === sortedNums[fixed - 1]) {
            fixed++;
            continue }
    threeSum(sortedNums,fixed+1,fixed,solutionArray,target)
    fixed++
    }
    return solutionArray


};