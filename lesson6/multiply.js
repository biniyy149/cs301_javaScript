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
function filtered(str){
    let vowels = "aAeEiIoOuU";
    count = 0;

    for(let i=0;i<str.length;i++){
        if(vowels.indexOf(str[i])!==-1){
            count++;
            
        }
            
        
    }
    return count;
    
    
}

console.log(["biniyam","thry","trwwq","iother"].filter(s=>filtered(s)===0));
let t = 'aAeEiIoOuU';
console.log(["hi_there","how","there","bini_yemane"].filter(s=>s.indexOf('_')===-1));