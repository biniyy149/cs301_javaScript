function addEnds(arr) {
    let sum = arr[0] + arr[arr.length-1];
    return sum;
    
}
let list = [17,8,9,5,20];
let value = addEnds(list);
console.log(value);