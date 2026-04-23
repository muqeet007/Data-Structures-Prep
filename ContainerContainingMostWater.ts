
function Area(left:number,right:number,height:number[]):number{
    const horizontal:number=right-left
    const vertical:number=Math.min(height[left],height[right])

    return (horizontal*vertical)
}


function maxArea(height: number[]): number {
    let left:number=0
    let right:number=height.length-1

    let max:number=-Infinity

    while(left<right){
        max=Math.max(max,Area(left,right,height))

        if(height[left]>=height[right]){
            right--
        }
        else{
            left++
        }
    }

    return max

};