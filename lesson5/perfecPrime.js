function isPerfect(arr){
    let ppr = true;
    for(let i=1;i<arr.length;i=i+2){
        for(let j=2;j<arr[i];j++){
            if(arr[i]%j===0){
                ppr = false;
                break;
            }
        }
    }
    return ppr;
}
let arr1 = [1,3,5,25,6,7];
let arr2 = [2,7,6,15,5];
console.log(isPerfect(arr1));
console.log(isPerfect(arr2));