function count(string) {
    // TODO
    const letterObject={}
    for(const letter of string){
        letterObject[letter]=(letterObject[letter]||0)+1

    }
    
    
    return letterObject;
  }

  console.log(count("kimmytimmy what"))


  