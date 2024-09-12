const findTheOldest = function(dic) {
    let a = dic.map( (x) => ({age: (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth, name: x.name}) );
    return (a.reduce( (oldest,current) => ((current.age > oldest.age) ? current : oldest), a[0]));
};

// Do not edit below this line
module.exports = findTheOldest;
