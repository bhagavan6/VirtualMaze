let a="VirtualMaze";
let freq=new Map();
for(let i of a){
    freq.set(i,(freq.get(i)||0)+1);
}
for(let i of freq.keys()){
    console.log(`${i}:${freq.get(i)}`);
}