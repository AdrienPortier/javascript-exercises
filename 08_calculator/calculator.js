const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	 return a-b;
};

const sum = function(numbers) {
	return numbers.reduce((a,b) => a+b,0);
};

const multiply = function(numbers) {
  return numbers.reduce((a,b) => a*b,1);
};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(n) {
  let res = 1;
	 while(n != 0){
    if(n != 0){
      res *= n;
    }
    n = n-1;
   }
   return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
