const prompt = require('prompt-sync')();
let numbers = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelvth'];
let gifts = ['a partridge in a pear tree','two turtle doves','three french hens','four calling birds','five golden rings','six geese a laying','seven swans a swimming','eight maids a milking','nine ladies dancing','ten lords a leaping','eleven pappers pipping','twelve drummers drumming'];
let num = parseInt(prompt('Enter a number between 1 and twelve: '));
let message = " ";
if(num===1){
    message = gifts[0];

}else{
    for(let i = 2;i<=12;i++){
        if(num===i){
            let temp = [];
            for(let j=0;j<i;j++){
                temp[j]=gifts[j];
                
                message = temp.join(',');

            }
        }
    }

}
console.log(message);