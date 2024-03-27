// WAP for findout repeat number
let numbers = [2,2,2,5,1,1,1,1,2,2,2,7,9,6,5,5];

function repeatNumberFind(numbers){
    let countMap = new Map;
    let result = [];
    for(const number of numbers){
        
        if(countMap.has(number)){
            //console.log(number);
            countMap.set(number,countMap.get(number)+1)
        }
        else {
            countMap.set(number,1);
        }
    }

    for(const [number,count] of countMap.entries()){
        if(count >=2){
            result.push(number);
        }
    }
    return result;
}
console.log(repeatNumberFind(numbers));