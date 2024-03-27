// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// Find Out Number of character count
const name = "Avinash Sharma";
let strName = [];
for(let str of name){
    console.log(str);
    strName.push(str);
}
let temparray ={};

for(let i=0; i<strName.length;i++)
{
    let objectName = strName[i].toLowerCase();

    if(temparray.hasOwnProperty(objectName)){

        let count = temparray[objectName];
         temparray[objectName]=++count;
    }
    else {
        temparray[objectName]=1;
    }
}
console.log(temparray);