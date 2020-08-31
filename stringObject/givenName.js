function extractGivenName(fullName){
    let temp_arr = fullName.split(',');
    let given_name = temp_arr[1];
    return given_name;
}
let last_name = extractGivenName("Reagan, Ronald");
console.log(last_name);