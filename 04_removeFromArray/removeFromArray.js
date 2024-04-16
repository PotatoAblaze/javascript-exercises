const removeFromArray = function(arr, ...elementsToRemove) {
    for(let i = 0; i < elementsToRemove.length; i++)
    {
        let elemIndex;
        while((elemIndex = arr.indexOf(elementsToRemove[i])) > -1)
        {
            arr.splice(elemIndex, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
