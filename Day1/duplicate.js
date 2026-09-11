let arr = [10, 20, 10, 30, 20, 40, 10];
// let result=new Set(arr);
// console.log([...result]);
let result=[];
for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i]);
    }
}
console.log(result);