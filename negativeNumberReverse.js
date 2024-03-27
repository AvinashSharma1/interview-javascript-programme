// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
console.log("Hello, World!");
// Negartive Number reverse for example number is -321 so out output will be -123
function reveseName(str){
    let strvalue = str.toString().split("");
    let isAppendSymbol = false;
    //console.log(strvalue);
    let reverseString = "";
    for(let i= strvalue.length-1; i>=0;i--){
        if(strvalue[i] !=="-")
            reverseString+= strvalue[i];
        else 
            isAppendSymbol = true;
    }
    if(isAppendSymbol)
        reverseString = Number("-"+reverseString);
    return reverseString;
}
let output = reveseName("-321");
console.log(` output is ${output} typeof ${typeof (output)}`);
