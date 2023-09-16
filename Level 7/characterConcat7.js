    function charConcat(string){
      let newStr='';
      const iterationsNeeded=Math.floor(string.length/2);
      for(let i=0;i<iterationsNeeded;i++){
          newStr+=string[i]
          newStr+=string[string.length-1-i]
          newStr+=i+1
      
      }
      
      
      
          return newStr
      }


console.log(charConcat("abcdef"))