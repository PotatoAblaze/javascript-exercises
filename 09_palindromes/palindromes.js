
function isAlphanumeric(c) {
    return c.toLowerCase() != c.toUpperCase() || c == +c;
}

const palindromes = function (str) {
    let a = 0;
    let b = str.length - 1;
    str = str.toLowerCase();

    while(a <= b)
    {
        if(str.at(a) == " " || !isAlphanumeric(str.at(a)))
        {
            a++;
            continue;
        }
        if(str.at(b) == " " || !isAlphanumeric(str.at(b)))
        {
            b--; 
            continue;
        }

        if(str.at(a) === str.at(b))
        {
            a++;
            b--;
            continue;
        }
        else
        {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
