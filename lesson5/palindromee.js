function isPalindrome(str){
    let temp  = str.toLowerCase();
    let temparr = [];
    for(let i=0;i<temp.length;i++){
        temparr[i]
    }
}
function testPalendrome(text){
    let reversed = " ";
    let palendrome = false;
    for(let i = 0; i<text.length;i++){
        reversed += text[i]+reversed;
        
        }

    
    if(text === reversed){
        palendrome = true;

    }
    return palendrome;
}
    

console.log(testPalendrome("madam"));
["madam", "car"].map(s=>isPalindrome(s));