function removeElement(nums: number[], val: number): number {
    
    let pointer1:number=0
    let pointer2:number=0

    while(pointer2 !== nums.length){
         if(nums[pointer2] !==val){
            nums[pointer1]=nums[pointer2]
            pointer1++
         }
          pointer2++
    }

    return pointer1
};