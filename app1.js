// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise.all

// Refer Image 1
// Promise.all takes in an array of promises
// Lets say all promises are resolved
// returns a new array of values from each promises
// only after 3 sec we get this new array of values
// thus the new array with the values will only be formed once all the promises are resolved

// Refer Image 2
// If one of the promise fail after 1sec then it will return an error
// Thus using promise.all we cant handle cases where 2/3 promises are resolved and one has failed

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise.allSettled 

// Refer Image 3
// waits for all the promise to be settled or completed
// Even if p2 has returned an error after 1 sec it waits for p1 and p3 to get completed

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise.race 

// Refer Image 4 and 5
// returns result of first settled promise 
// does not care if its resolved or rejected
// p3 took 2 sec only 
// If its resolved then the result is returned
// if its rejected then the error is returned

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise.any

// Refer Image 6 and 7
// It will wait for the first promise to get resolved
// If all the promise fails an aggregate of all the error is returned 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





