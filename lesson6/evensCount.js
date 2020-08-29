function countEvens(arr){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(i%2===0){
            count++;
        }
    }
    return count;

}
let list = [17,8,9,5,20,30,40,60,4];
let count = countEvens(list);
console.log(count);