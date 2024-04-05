const sumAll = function(start,end) {
    let sum = 0;
    let min = start;
    let max = end ;
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start < 0 || end < 0 ) return "ERROR";
    if (start > end ){
        min = end;
        max = start;
    }
    sum = (max*(max+1))/2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
