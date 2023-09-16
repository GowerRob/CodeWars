function rowSumOddNumbers(n) {

    // TODO
let total=0;
let lastNumberPosition=0;
for(i=0;i<=n;i++){
    lastNumberPosition+=i
}
const firstNumberPosition=lastNumberPosition-n+1;
for (i=firstNumberPosition;i<=lastNumberPosition;i++){
    total+=((i*2)-1)
}
return total;
}


console.log(rowSumOddNumbers(2))