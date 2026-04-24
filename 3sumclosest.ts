
function twoSum(nums:number[],left:number,right:number,fixed:number,target:number,bestSum:number):number{
    while(left<right){
    let currentSum:number=nums[left]+nums[right]+nums[fixed]


    if(currentSum === target){
        return currentSum
    }

    if(Math.abs(currentSum-target)<Math.abs(bestSum-target)){
        bestSum=currentSum
    }

    if(currentSum<target){
        left++
    }
    else{
        right--
    }
    }

    return bestSum

}

function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let fixed:number=0
    let bestSum:number=nums[0]+nums[1]+nums[2]

    while(fixed<nums.length-2){
        bestSum=twoSum(nums,fixed+1,nums.length-1,fixed,target,bestSum)

        if(bestSum===target){
            return bestSum
        }
        else{
            fixed++
        }
    }  

    return bestSum 


};