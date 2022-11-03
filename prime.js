function checkPrime(N){
    let factors=0;
    for(let i=1;i<=N;i++){
        if(N%i==0){
            factors++;
        }
    }
    if(factors==2){
        console.log("Prime Number");
    }
    else{
        console.log("Not Prime Number");
    }
}
let ans=checkPrime(5);
