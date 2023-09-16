// You are given an array (which will have a length of at least 3, but could be very large) 
//containing integers. The array is either entirely comprised of odd integers or entirely comprised 
//of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    //your code here

    let outlier;
    const a=Math.abs(integers[0]%2);
    const b=Math.abs(integers[1]%2);
    const c=Math.abs(integers[2]%2);
    console.log(a,b,c)

    //if less than 2 we are looking for odd, otherwise even
    if((a)+(b)+(c)<2){
        console.log("Looking for an odd")
        integers.forEach(element => {
            if(Math.abs(element%2)===1){outlier=element}
        });
    }else{
        console.log("Looking for an even")
        integers.forEach(element => {
            if(element%2===0){outlier=element}
        });
    }

    return outlier
  }


  console.log(findOutlier([146533462,-118251674,-146647464,110410206,-152773192,-9179086,44667910,-123582038,123957986,-88385882,-116580260,72496980,-107423848,-87429006,-29189914,21437724,-184813170,197918630,-152694660,-199451168,-83547720,101106098,45604854,-173157774,-78979234,127095068,-157372545,80900310,-21210772,-32183138,-44343496,-8360842,-46748616,89867860,-92872972,115320026,88919840,-83465566,127987536,-12216048,-93477110,61534672,61073840,-61043628,141398866,-118819872,-17477436,58296150,-22647590,-87309188]))

  //-157372545


  //Alt solution
//   function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }