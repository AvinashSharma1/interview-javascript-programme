// WAP : reverse number 
let num = 6;
for(let i = 1; i<=num;i++)
{
    console.log(i);
    if(i==num){
        reverseFunction(num);
    }
}
function reverseFunction(num){
    for(let j=num-1; j>=1;j--){
        console.log(j);
    }
}