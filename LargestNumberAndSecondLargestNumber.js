// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// WAP for Largest Number and second Largest number

let tempArray = [2,1,3,7,8,6,9,5];
//let sortArray = tempArray.sort( (a,b) => b -a  );
//console.log(sortArray);
//console.log(sortArray[1]);
let secondLargestNumber = 0;
let largest = 0;
for(let data of tempArray){
    //console.log(data);
    if(data > largest ){
        secondLargestNumber = largest;
        largest = data;
    }
    else if (data > secondLargestNumber && data !== largest){
        secondLargestNumber = data;
    }
}
console.log(`largest number is ${largest}`);
console.log(`Second largest number is ${secondLargestNumber}`);

