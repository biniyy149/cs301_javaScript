function titleCase(s){
    let lowerStrArray = s.toLowerCase().split(" ");
    let capitalized = " ";
    for(let i = 0; i < lowerStrArray.length; i++){
        let word = lowerStrArray[i].charAt(0).toUpperCase() + lowerStrArray[i].slice(1);
        capitalized = capitalized + " " + word;
    
        
    }
    return capitalized;
          
}
let words = "javascript is the most important programming language";
let capitalized_words = titleCase(words);
console.log(capitalized_words);