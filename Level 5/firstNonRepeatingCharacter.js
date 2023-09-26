function firstNonRepeatingLetter(s) {
    // Add your code here
    if(s===""){return ""}


        const letters={}

    for(const letter of s){
            letters[letter.toLowerCase()]=(letters[letter.toLowerCase()]||0)+1
    }

    for(const letter of s){
        if(letters[letter.toLowerCase()]===1){
            return letter
        }
    }
    return ""


  }

  console.log(firstNonRepeatingLetter("abab"))

//   Alt Solution
//   function firstNonRepeatingLetter(s) {
//     for(var i in s) {
//       if(s.match(new RegExp(s[i],"gi")).length === 1) {
//         return s[i];
//       }
//     }
//     return '';
//   }