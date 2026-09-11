let name="VirtualMaze";
let count=0;
let vowels="aeiouAEIOU";
for(let i=0;i<name.length;i++){
    if(vowels.includes(name[i])){
        count++;
    }
}
console.log(count);