const add = function(n1,n2) {
	return n1+n2;
};

const subtract = function(n1,n2) {
	return n1-n2;
};

const sum = function(array) {
  let sum=0;
	array.forEach((item)=>sum+=item );
  return sum;
};

const multiply = function(array) {
  let mul=1;
	array.forEach((item)=>mul*=item );
  return mul;
};

const power = function(n1,n2) {
	return n1**n2;
};

const factorial = function(num) {
	if (num==0) return 1
  else return num * factorial(num-1);
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
