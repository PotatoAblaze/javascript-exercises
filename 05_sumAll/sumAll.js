const sumAll = function(start, end) {
    let sum = 0;
    if( typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0)
    {
        return "ERROR";
    }

    if(start > end)
    {
        let t = start;
        start = end;
        end = t;
    }
    for(let x = start; x <= end; x++)
    {
        sum += x;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
