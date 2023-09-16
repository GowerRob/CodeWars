function DNAStrand(dna){
    //your code here
    let newDNA=""
    for(const letter of dna){
        console.log(letter)
        switch (letter) {
            case 'G':newDNA+='C';break;
            case 'C':newDNA+='G';break;
            case 'A':newDNA+='T';break;
            case 'T':newDNA+='A';break;
            default:break;
        }
    }
    
    return newDNA
  }
  console.log(DNAStrand("ATTGC"))

//   var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNASt`1 rand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }