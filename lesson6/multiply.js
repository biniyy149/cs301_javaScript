function multiply(list,multiplier){
    let temp_arr = [];
    for(let i = 0; i < list.length; i++){
        temp_arr[i] = multiplier*list[i];
    }
    return temp_arr;
}
let list = [17,8,9,5,20];
let products = multiply(list,3);
console.log(products);