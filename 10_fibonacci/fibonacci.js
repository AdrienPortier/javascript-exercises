const fibonacci = function(n) {
    n = Number(n);
    let a = 0;
    let b = 1;
    if(!Number.isInteger(n) || n < 0 ){
        return "OOPS";
    }
    if (n > 0){
        for(let i = n-1; i >= 0; i--){
            let c = a+b;
            a = b;
            b = c;

        }
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
