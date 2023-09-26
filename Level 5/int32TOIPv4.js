function converter(num){
    const bits=[]
    let workingNumber=num;
    let bitNumber=Math.pow(2,31);

    while(bitNumber>=1){
        const thisBit=Math.floor(workingNumber/bitNumber)
        bits.push(thisBit);
        workingNumber=workingNumber-(thisBit*bitNumber);
        bitNumber/=2;
    }

    const result=[]
    for(let i=0;i<4;i++){
        let bit=128;
        let total=0;
        for(let j=i*8;j<=((i*8)+7);j++){
            total=+total+(bits[j]*bit);
            bit/=2;
        }

        result.push(total)
    }


    return result.join(".")
}


console.log(converter(2149583361))

//Alt Solutions
//function int32ToIp(int32){

//     return (
//              ((int32 >> 24) & 0xFF) + "." +
//              ((int32 >> 16) & 0xFF) + "." +
//              ((int32 >>  8) & 0xFF) + "." +
//              ((int32) & 0xFF)
//            );
    
//    }