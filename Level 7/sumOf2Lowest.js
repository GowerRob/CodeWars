function sumOf2Lowest(arr){
    const sortedArray=arr.sort((a,b)=>a-b);
    return sortedArray[0]+sortedArray[1]



}

console.log(sumOf2Lowest([7,8,3,4,5,6]))