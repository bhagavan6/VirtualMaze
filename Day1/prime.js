let num=43;
let isPrime=true;
if(num<=1){
    isPrime=false;
}
for(let i=2;i*i<=num;i++){
    if(num%i===0){
        isPrime=false;
        break;
    }
}
if(isPrime){
    console.log("Prime");
}
else{
    console.log("Not Prime");
}