const removeFromArray = function(array, ...number) {
    return array.filter(x => !number.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
