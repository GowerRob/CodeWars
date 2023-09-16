// complete the function
function solution(string) {
const regexSplit=/([a-z]*)([A-Z]{1}[a-z]*)/g



const broken=string.replace(regexSplit,'$1 $2')
console.log(broken)

}

solution("helleMateWhat")
