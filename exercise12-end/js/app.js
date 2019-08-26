/*
This array represents a series of pages in an online course. If the page has been viewed, it records a 1. It the page has not been viewed, it records a 0. Create a function that will check and see if there are any 0s in the array. If there is a 0, retrieve the index of the first 0 and return it; this is the page that will be shown to the user. If there are no zeros, return the index for the last element in the array (the last page).
*/

let stateInfo = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];

const getPagePosition = function() {
    if (stateInfo.includes(0)) {
        return stateInfo.indexOf(0);
    } else {
        return stateInfo.length - 1;
    }
};