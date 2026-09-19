let arr=[10,62,37,83,52];
let l=Number.MIN_SAFE_INTEGER;
let secl=Number.MIN_SAFE_INTEGER;
for(let i=0;i<arr.length;i++){
    if(arr[i]>l){
        secl=l;
        l=arr[i];
    }
    else if(arr[i]>secl&arr[i]!==l){
        secl=arr[i];
    }
}
if(secl===Number.MIN_SAFE_INTEGER){
    console.log("There is no second largest element");
}
else{
    console.log(`The second largest element is ${secl}`);
}