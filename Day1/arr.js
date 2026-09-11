let arr=[25,73,52,82,17];
let largest=arr[0];
let smallest=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
    if(arr[i]<smallest){
        smallest=arr[i];
    }
}
console.log(`Largest: ${largest}`);
console.log(`Smallest: ${smallest}`);