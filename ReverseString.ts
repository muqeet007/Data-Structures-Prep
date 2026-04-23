/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let pointer1:number=0
    let pointer2:number=s.length-1

    while(pointer1<pointer2){
        [s[pointer1],s[pointer2]]=[s[pointer2],s[pointer1]]
        pointer1++
        pointer2--
    }

    return
};