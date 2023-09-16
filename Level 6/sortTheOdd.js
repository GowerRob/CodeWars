function sortArray(array) {
    // Return a sorted array.
    const odds=array.filter((element)=>Math.abs(element%2)===1).sort((a,b)=>a-b)
    console.log(-3%2)
    
    console.log(odds)
    for(const number in array){
        if(array[number]%2===1){
            array[number]=odds.shift();
        }
    }

    return array
  }


  console.log(sortArray([9, 8, 7, 6, 5, 4, -3, 2, 1, 0]))