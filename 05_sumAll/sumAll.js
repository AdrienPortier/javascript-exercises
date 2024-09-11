const sumAll = function(a,b) {
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }
    let min = a;
    let max = b;
    if(a > b){
        [min, max] = [b,a];
    }
    if(a == b){
        return a;
    }
    return Math.floor(max*(max+1)/2 - min*(min-1)/2)


};

// Do not edit below this line
module.exports = sumAll;
