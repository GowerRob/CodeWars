// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.



function sumStrings(a,b) { 
    let stringA= a;
    let stringB=b; 
    const chunkSize=7;
    const chunks=[];
    let finalSum=''
    while((stringA.length>0)||(stringB.length>0)){

        const thisA=stringA.slice(stringA.length-chunkSize,stringA.length)
        stringA=stringA.slice(0,stringA.length-chunkSize)


        const thisB=stringB.slice(stringB.length-chunkSize,stringB.length)
        stringB=stringB.slice(0,stringB.length-chunkSize)

        const sumAB=((+thisA)+(+thisB)).toString()

        if(sumAB.length===3){
        chunks.unshift([sumAB.slice(0,1),(sumAB.slice(sumAB.length-chunkSize,sumAB.length))])
        }else{
        chunks.unshift(['0',(sumAB.slice(sumAB.length-chunkSize,sumAB.length))])
        }
    }

    console.log()
    carry=0;
    const finalArray=[]
    for(let i=chunks.length-1;i>=0;i--){

        const value=Number(chunks[i][1])+carry;
        if(value>99){
            let digits=value%100;
            if(digits<10){
                finalArray.unshift('0'+value%100) 
            }else{
                finalArray.unshift(value%100)
            }
            carry=1;
        }else{
            if(value<10){
                finalArray.unshift('0'+value);
            }else{
                finalArray.unshift(value);
            }
            
            carry=Number(chunks[i][0])
        }

    }
    if(chunks[0][0]>0){
        finalArray.unshift(chunks[0][0])
    }


    return finalArray.join("")

}

console.log(sumStrings('55778899',"88223344"))
//9007199254740991