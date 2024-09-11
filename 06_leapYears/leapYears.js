const leapYears = function(number) {
    if (!Number.isInteger(number)){
        return "ERROR";
    }
    if( (number%4 == 0 && number%100 != 0 )|| (number%4 == 0 && number%100 == 0 && number%400 == 0)){
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
