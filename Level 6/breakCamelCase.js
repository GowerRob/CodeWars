// complete the function
function solution(string) {
const regexSplit=/([a-z]*)([A-Z]{1}[a-z]*)/g

const broken=string.replace(regexSplit,'$1 $2')
return broken

}

solution("helleMateWhat")


//alt solutions
// complete the function
// function solution(string) {
//     return(string.replace(/([A-Z])/g, ' $1'));
  
//   }