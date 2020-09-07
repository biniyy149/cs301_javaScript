function preFix(first, second){
    let prefix = " ";
    let j = 0;
    for(let i = 0; i < first.length; i++){
        
        if(first.charAt(i) === second.charAt(j)){
            prefix = prefix + second.charAt(j);
            j++;
        }
    }
    return prefix;
}
let pre_fix = preFix("dislike", "distasteful");
console.log(pre_fix);