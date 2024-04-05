const getTheTitles = function(books) {
    let title = [];
    for(let bk of books){
        title.push(bk.title)
    }
    return title
};

// Do not edit below this line
module.exports = getTheTitles;
