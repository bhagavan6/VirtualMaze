let arr=[10,20,30,10,30,40,90];
let res=[];
let freq=new Map();
for(let i of arr){
    if(freq.has(i)){
        freq.set(i,freq.get(i)+1);
    }
    else{
        freq.set(i,1);
    }
}
for(let i of freq.keys()){
    if(freq.get(i)>1){
        res.push(i);
    }
}
console.log(res);
