const fibonacci = function(n) {
    n = Number(n);
    if(n < 0)
    {
        return("OOPS");
    }
    let a = 1;
    let b = 0;
    let c = 0;
    for(let x = 0; x < n; x++)
    {
        c = a + b;

        a = b;
        b = c;
    }

    return c;
};

// Do not edit below this line
module.exports = fibonacci;
