const removeFromArray = function(myArray, toRemove) {
    myArray.splice(myArray.indexOf(toRemove), 1);
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
