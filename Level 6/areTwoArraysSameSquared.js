// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
//  that checks whether the two arrays have the "same" elements, with the same multiplicities 
//  (the multiplicity of a member is the number of times it appears). "Same" means, here, 
//  that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]


function comp(array1, array2){
  //your code here
  if(array1===null||array2===null){return false}
  const array1Sorted=array1.sort((a,b)=>(a-b));
  const array2Sorted=array2.sort((a,b)=>(a-b));

  return array1.every((element,index)=>element*element===array2Sorted[index])


}
console.log(comp([3,2,3],[4,9,9]))

//Alt solutions
