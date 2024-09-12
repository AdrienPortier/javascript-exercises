const palindromes = function (string) {
    let str = string.replaceAll(".","").replaceAll("!","").replaceAll(",","").replaceAll(" ","").toLowerCase();
    console.log(str);
    return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
