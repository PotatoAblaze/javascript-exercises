const reverseString = function(string) {
    outputString = "";
    for(const char of string)
    {
        outputString = char + outputString;
    }

    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
