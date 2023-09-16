function sumDigPow(a, b) {
    // Your code here
    
const results=[]

    for(let i=a;i<=b;i++){
            const digitHolder=[];
            let workingNumber=i;
            while(workingNumber>=1){
                digitHolder.unshift(workingNumber%10);
                workingNumber=Math.floor(workingNumber/10)
            }

            if((digitHolder.map((element,index)=>{return Math.pow(element,index+1)}).reduce((a,b)=>a+b))===i){results.push(i)}

    }

    return results 
}

  console.log(sumDigPow(1,100))

  //Alt solution
//   function sumDigPow(a, b) {
//     var arr = [];
//     for (var i = a; i <= b; i++) {
//       var sum = 0;
//       for (var j = 0; j <= String(i).length; j++) {
//         sum += Math.pow(parseInt(String(i)[j]), j+1);  
//         if (sum == i) arr.push(i);
//       }
//     }
//     return arr;
//   }