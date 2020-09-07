function suffix(first, second){
    let common_sufix = " ";
    let j = second.length-1;
    for(let i = first.length-1; i > 0; i--){
        
        if(first.charAt(i) === second.charAt(j)){
            common_sufix = second.charAt(j) + common_sufix;
            j--;
        }
    }
    return common_sufix;
}
let commonSuffix = suffix("swimming", "walking");
console.log(commonSuffix);