// function deleteNth(arr,n){
//     // ...
//     // const itemCounter=(arr2, testValue)=>{
//     //     return arr2.filter((x)=>x===testValue).length;
//     // }
//     // const newArray=[]

//     // for(const item of arr){
//     //     if(itemCounter(newArray,item)<n){
//     //         newArray.push(item)
//     //     }

//     // }
//     // return newArray



//   }

function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      console.log(cache)
      console.log(cache)
      return cache[n] <= x;
    });
  }



console.log(deleteNth([3,4,5,6,7,1,2,3,4,5,5,2,3,4,5,6,6],2))