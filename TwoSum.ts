function twoSum(nums: number[], target: number): number[] {
    const map=new Map<number,number>()

    for (let i=0;i<nums.length;i++)
    {
        const remaining:number=target-nums[i]
        if(map.has(remaining)){
            return [i,map.get(remaining)]
        }
        map.set(nums[i],i)
    }

};