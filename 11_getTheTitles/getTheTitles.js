const getTheTitles = function(arr) {
    let titleList = [];
    for(const book of arr)
    {
        titleList.push(book.title);
    }
    return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
