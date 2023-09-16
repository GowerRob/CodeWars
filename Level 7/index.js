function duplicateEncode(word){
    // ...
    const newWord=word.toLowerCase();
    const codeArray=[]
    const dupLettersIndex=[]
    const resultArray=[]
        for(const letter of newWord){
            codeArray.push(letter.charCodeAt(0));
        }

        for(let i=0;i<codeArray.length;i++){
            const thisCode=codeArray[i];
            for(let j=i+1;j<codeArray.length;j++){
                if(codeArray[j]===thisCode){
                    codeArray[j]=')'
                    codeArray[i]=')'
                }
            }
            if(typeof codeArray[i]==='number'){
                codeArray[i]="("
            }
        }

       



  return codeArray.join("")
}


console.log(duplicateEncode(')())())'))
