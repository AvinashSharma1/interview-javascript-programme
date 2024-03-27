/* WAP - Array Inside array will come in single array, Sorting of array and sum of value of array
	for example valeu is  [12,34,44,[2,7,8,[26,76,34]]]
	Output
	1. Single array = [12,34,44,2,7,8,26,76,34]
	2. Sort Array = [76,44,34,34,26,12,8,7,2]
	3. Sum of Array = 243

*/
const arrValue = [12,34,44,[2,7,8,[26,76,34]]];

function singleArrayOutput(arr){

    return arr.reduce( (result,item)=>{
        if(Array.isArray(item)){
            result.push(...singleArrayOutput(item));
        }
        else{
            result.push(item)
        }

        return result;

    },[]);

}

let outputArray = singleArrayOutput(arrValue);
let sortOutputArray = [...outputArray].sort((a,b) => b-a);
let sumOfArray = outputArray.reduce((accum,curentValue) => accum + curentValue,0);


console.log(outputArray);
console.log(sortOutputArray);
console.log(sumOfArray);