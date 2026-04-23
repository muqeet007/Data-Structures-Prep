function isPalindrome(s: string): boolean {
    
   const cleaned:string[]=s.toLowerCase().replace(/[^a-z0-9]/g, "").split("")

   let pointer1:number=0
   let pointer2:number=cleaned.length-1

   while(pointer1<pointer2){
    if(cleaned[pointer1]!==cleaned[pointer2])
    {
        return false
    }
    pointer1++
    pointer2--
   }
    return true

};