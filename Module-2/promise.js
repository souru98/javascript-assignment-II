//Exercises Module 02 - JS Asynchronous 
//Task -1
//checkAge function with resolve and reject 

function checkAge(age) {
    return new Promise(function(resolve, reject) {
        if (age > 18) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

//passsing age to checkAge function 
let promise = checkAge(20);

//if resolved
promise.then(function() {
        console.log("Older than 18");
    })
    //if rejected
    .catch(function() {
        console.log("less than 18");
    });