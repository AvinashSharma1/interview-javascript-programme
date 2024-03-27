console.log("Hello, World!");
// WAP for string Number count
let arr = ["l1",1,"l2",2,"l3",3,"l1",2];
let tempObj = {};
for(let i =0; i<arr.length; i +=2)
{
    let key = arr[i];
    let value = arr[i+1];
    if(tempObj[key])
        {
            let count = tempObj[key] + value;
            tempObj[key] = count;
        }
        else{
            tempObj[key] = value;
        }
}
console.log(tempObj);