function checkPrime(N){
    let count=0;
    for(let i=1;i<=N;i++){
        if(N%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("Not Prime Number");
    }
    else{
        console.log("Prime Number");
    }
}
let ans=checkPrime(3);
