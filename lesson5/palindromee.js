
function testPalendrome(text){
    let temp = text.toLowerCase();
    
    let reversed = "";
    let palendrome = false;
    for(let i = 0; i<temp.length;i++){
        reversed = temp.charAt(i) + reversed;
        
        }

    
    if(temp === reversed){
        palendrome = true;

    }
    return palendrome;
}
    

console.log(testPalendrome("mAdaM"));
console.log(["madam", "car"].map(s=>testPalendrome(s)));
console.log(["madam", "car"].map(testPalendrome));
