function sortedSquares(nums: number[]): number[] {
    const result: number[] = new Array(nums.length);

    let pointer1 = 0;
    let pointer2 = nums.length - 1;
    let resultpointer = nums.length - 1;

    while (pointer1 <= pointer2) {
        const square1 = nums[pointer1] ** 2;
        const square2 = nums[pointer2] ** 2;

        if (square1 >= square2) {
            result[resultpointer] = square1;
            pointer1++;
        } else {
            result[resultpointer] = square2;
            pointer2--;
        }

        resultpointer--;
    }

    return result;
}