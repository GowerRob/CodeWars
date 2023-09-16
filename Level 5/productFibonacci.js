// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false},

function productFib(prod){
    // ...

    const fibNumbers=[0,1]

    while(fibNumbers[fibNumbers.length-1]*fibNumbers[fibNumbers.length-2]<prod){
    const a=Number(fibNumbers[fibNumbers.length-2])
    const b=Number(fibNumbers[fibNumbers.length-1])
    const newTerm=a+b;
    fibNumbers.push(newTerm)
    }
    const final=fibNumbers[fibNumbers.length-1]
    const penultimate=fibNumbers[fibNumbers.length-2]
    const fibProduct=(final*penultimate)===prod

    return [penultimate,final,fibProduct]


}

  console.log(productFib(800))

  //Alt solution
//   function productFib(prod){
//     var n = 0;
//     var nPlus = 1;  
//     while(n*nPlus < prod) {
//       nPlus = n + nPlus;
//       n = nPlus - n;
//     }
//     return [n, nPlus, n*nPlus===prod];
//   }