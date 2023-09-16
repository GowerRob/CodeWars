function persistence(num) {
    //code me
    let counter=0;
    let workingNum=num;


    while(workingNum.toString().length>1){
        workingNum=workingNum.toString().split("").reduce((a,b)=>a*b);
        counter++;
    }

    return counter;
 }


 console.log(persistence(999))