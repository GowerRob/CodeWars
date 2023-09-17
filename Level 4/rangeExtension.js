// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. 
// The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. 
// For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(arr){
    const differences=[]
    arr.forEach((element,index)=>{differences.push(arr[index+1]-element)})
    let startGroup=Number.NaN;
    let endGroup=Number.NaN;
    const results=[]
    console.log(startGroup)

    for(let i=0;i<differences.length;i++){
        //start a new group if...
        if(isNaN(startGroup)&&(arr[i+2]-arr[i]<=2)){
           // console.log("Starting a new group with: ",arr[i])
            startGroup=arr[i]
        }

        //update endGroup
        if(!isNaN(startGroup)&&arr[i+1]-arr[i]<=1){
           // console.log("Continuing group with: ",arr[i])
            endGroup=arr[i]
        }
        else{
            //console.log("Here with: ",arr[i])
            if(isNaN(startGroup)){
                results.push(`${arr[i]}`);
            }else{
                endGroup=arr[i]
                results.push(`${startGroup}-${endGroup}`);
            }
            startGroup=NaN
            endGroup=NaN
        }
    }
    return results.join(",")
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));


//Alt Solution

// function solution(individualIntegers) {
// 	return individualIntegers
// 		.reduce(splitIntoRanges, [])
// 		//.map(convertToRange)
// 		//.join(",");
// }

// function splitIntoRanges(ranges, number) {
// 	console.log(ranges,number)
    
//     if (!ranges.length) {
// 		ranges.push([number]);
// 		return ranges;
// 	}

// 	var lastRange = ranges[ranges.length - 1];
// 	var lastNumber = lastRange[lastRange.length - 1];

// 	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	
//     return ranges;
// }

// function convertToRange(range) {
// 	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
// }

// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));