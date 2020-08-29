function rotateLeft(list){
    let temp = list[0];
    for(let i = 0; i<list.length-1; i++){
        list[i] = list[i+1];

    }
    list[list.length-1] = temp;
    return list;
}
let list = [17,8,9,5,20,56,34];
let rotated_array = rotateLeft(list);
console.log(rotated_array);