/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    
    let pointer1:number=0
    let pointer2:number=0

    while(pointer2!==nums.length){
        if(nums[pointer1]===1)
        {
            pointer1++
            pointer2++
        }
        else
        {
            if(nums[pointer2]===0){
                pointer2++
            }
            else{
                [nums[pointer1],nums[pointer2]]= [nums[pointer2],nums[pointer1]]
                pointer1++
                pointer2++
            }
        }
    }

    return 
};