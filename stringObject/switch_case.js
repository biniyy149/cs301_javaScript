function switchCase(s){
    let text = " ";
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === s[i].toUpperCase()){
            text = text + s[i].toLowerCase();
        }else{
            text = text + s[i].toUpperCase();
        }

    }
    return text;

}
let mixed_text = switchCase("CaTcH 22");
console.log(mixed_text);