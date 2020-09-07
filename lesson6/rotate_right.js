function rotateRight(list){
    let temp = list[list.length-1];
    for(let i = list.length-1; i>0; i--){
        list[i] = list[i-1];

    }
    list[0] = temp;
    return list;
}
let list = [17,8,9,5,20];
let rotated_array = rotateRight(list);
console.log(rotated_array);
const reducer = (acc,cur)=>acc+cur;
const reducer1 = (acc,cur)=>acc*cur;
console.log(list.reduce(reducer));
console.log(list.reduce(reducer1));
for(let k = 1;k<=2;k++){
    for(let m=0;m<=4;m +=2){
        console.log(k*m);
    }
}
function sumSafe(arr){
    let sum_safe = false;
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    for(let j=0;j<arr.length;j++){
        if(sum === arr[j]){
            sum_safe = true;
        }
    }
    return sum_safe;

}
console.log(sumSafe([5,5,3,6,19]));
