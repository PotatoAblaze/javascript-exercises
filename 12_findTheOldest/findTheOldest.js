const findTheOldest = function(arr) {
    let oldestAge = 0;
    let oldestPerson;

    for(const person of arr)
    {
        let age;
        if(person.yearOfDeath !== undefined)
        {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        else age = 2024 - person.yearOfBirth;

        if(age > oldestAge)
        {
            oldestPerson = person;
            oldestAge = age;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
