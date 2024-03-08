function InverterString(string){
    let novaString = '';
    for(let i = string.length - 1; i >= 0; i--){
        novaString += string[i];
    }
    return novaString
}

const str = "Gupy";
console.log(InverterString(str))