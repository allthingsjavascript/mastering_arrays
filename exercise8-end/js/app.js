//Redo this function from exercise 4 using an Array method as a part of the processData function. 

//The processData function has several data structures being passed to it. Check to see if the data is an Array. If not convert it to an array and then return an array of those arrays. To check the returned value you can display the allArray variable.

let processData = function(...coll) {
    //console.log(arguments);
    return coll.map(val => Array.isArray(val) ? val : Array.from(val));
};


//Once you have successfully completed the array of arrays in the allArray variable, use another Array method to convert all those separate arrays into one single array. You will need to complete this in the coll.js file.