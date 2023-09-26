//permutation algorithm
//loop through the elements, passing the element and a list of the remaining elements to loop through to add to the end on the next iteration.
//So that every possible comination of elements are passed
// // eg cat
// (at,c) -> (t,ca) ->cat
//        ->(a,ct) -> cat
// (ct,a)->  (t,ac)_> act
//       ->  (c,at)-> act
// (ca,t) ->  (a,tc)-> tca 
//         >(c,ta)->tac

//Note , below solution is unefficent

const nextBigger = (input) => {
  const inputArr=input.toString().split("")
  let result = [];

const permute = (arr, m = []) => {  
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        ///copies current arr
        let curr = arr.slice();
        //returns a specific element (i)
        let next = curr.splice(i, 1);
        //curr =i->end   
        
        permute(curr.slice(), m.concat(next))
     }
   }
 }
 permute(inputArr)
 const numberResults=result.map(element=>Number(element.join("")))
 const resultsSorted=numberResults.sort();

console.log(resultsSorted)




let x;
for(let i=resultsSorted.indexOf(input)+1;i<resultsSorted.length;i++){
  if(resultsSorted[i]>input||resultsSorted[i]===undefined){
    
    x=resultsSorted[i];
    break;
  }
}

if(x===undefined){
  return -1
}else{
  return x
}


}

  console.log(nextBigger(414))


