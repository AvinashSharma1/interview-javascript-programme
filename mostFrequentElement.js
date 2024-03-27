// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
console.log("Hello, World!");
let arr = [1,2,3,4,5,4,4,5];
//let output = arr.sort((a,b) => a-b);
let temp = {};
let maxCount  = 0;
let mostFrequentElement = null;
for(let arrValue of arr){
    console.log(arrValue);
    if(temp[arrValue])
    {
        
        temp[arrValue]++;

    }
    else{
        temp[arrValue] = 1;
        maxCount[arrValue] = temp[arrValue];
    }

if (temp[arrValue] > maxCount) {
    mostFrequentElement = arrValue;
    maxCount = temp[arrValue];
  }
}

console.log(temp)
console.log(`The most frequent element is ${mostFrequentElement} with a count of ${maxCount}`);
//console.log(output);