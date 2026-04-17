function removeDuplicates(nums: number[]): number {
    
        if(nums.length as number === 0){
            return 0 as number 
        }
        else if(nums.length as number === 1)
        {
            return 1 as number 
        }
        else
        {
            let pointer1:number =0
            let pointer2:number=pointer1+1
            
            while(pointer2 as number !== nums.length as number){
                if(nums[pointer1]!==nums[pointer2]){
                    pointer1++
                    nums[pointer1]=nums[pointer2]
                 }
                pointer2++
            }

            return (pointer1+1) as number
        }

    };
