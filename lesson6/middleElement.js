function getMiddle(arr) {
    let middle = 0;
    if(arr.length % 2 === 0){
        middle = (arr[arr.length/2]+arr[(arr.length/2)-1])/2;


    }else{
        middle = arr[Math.floor(arr.length/2)];
    }
    return middle;

    
}
let list = [12,8,4,15,17,5,20,11];
let value = getMiddle(list);
console.log(value);