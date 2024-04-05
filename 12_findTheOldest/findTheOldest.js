const findTheOldest = function(people) {
    let old = 0;
    let oldestName = "";
    for(let ppl of people){
        if(!ppl.yearOfDeath){
            ppl.yearOfDeath = new Date().getFullYear();
        }
        const age = ppl.yearOfDeath - ppl.yearOfBirth;
        if (age > old ){
            old = age
            oldestName = ppl.name;
        }
    }
    return  { name: oldestName }; ;
};

// Do not edit below this line
module.exports = findTheOldest;
