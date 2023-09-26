function pickPeaks(arr){
  
    //  return {pos:[],peaks:[]}
    const pos=[];
    const peaks=[];
    const letterCodes=['X'];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>arr[i-1]){
            letterCodes.push('U')
        }else if(arr[i]===arr[i-1]){
            letterCodes.push('E')
        }else{
            letterCodes.push('D')
        }
    }
    const codeString=letterCodes.join("")
    const regexp=/UE*D/g;
    const array=Array.from(codeString.matchAll(regexp));
    for(let i=0;i<array.length;i++){
            //console.log(array[i])
            const {pattern, index, input, groups}=array[i];
            peaks.push(arr[index]);
            pos.push(index);
    }


    return {pos:pos, peaks:peaks}
  }

  console.log(pickPeaks([2,1,3,1,2,2,2,2]));


  //ALT Solutions
//   function pickPeaks(arr){
//     var result = {pos: [], peaks: []};
//     if(arr.length > 2) {
//       var pos = -1;
//       for(var i=1; i<arr.length;i++){
//         if(arr[i] > arr[i-1]) {
//           pos = i;
//         } else if(arr[i] < arr[i-1] && pos != -1) {
//           result.pos.push(pos);
//           result.peaks.push(arr[pos]);
//           pos = -1;
//         }
//       }
//     }
//     return result;
//   }