function twoSum(
    sortedNums: number[],
    left: number,
    right: number,
    a: number,
    solutionArray: number[][]
) {
    while (left < right) {
        const sum = sortedNums[left] + sortedNums[right] + a;

        if (sum < 0) {
            left++;
        } else if (sum > 0) {
            right--;
        } else {
            solutionArray.push([a, sortedNums[left], sortedNums[right]]);
            left++;
            right--;

            while (left < right && sortedNums[left] === sortedNums[left - 1]) left++;
            while (left < right && sortedNums[right] === sortedNums[right + 1]) right--;
        }
    }
}

function threeSum(nums: number[]): number[][] {
    const solutionArray: number[][] = [];
    const sortedNums = nums.sort((a, b) => a - b);

    let pointer = 0;

    while (pointer < sortedNums.length - 2) {
        const a = sortedNums[pointer];

        // skip duplicates
        if (pointer > 0 && sortedNums[pointer] === sortedNums[pointer - 1]) {
            pointer++;
            continue;
        }

        twoSum(sortedNums, pointer + 1, sortedNums.length - 1, a, solutionArray);

        pointer++;
    }

    return solutionArray;
}