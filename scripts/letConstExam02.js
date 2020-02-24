//////////////////////////////////////////////////////////////////////////
// let & const in function scope
//

// ES5 Variable in function
function accountVerification(name, passwd) {
    var n = 'Chris';    // var variable inside function scope is accessible anywhere inside the function
    var p = 2345;
    if (name === n && passwd === p) {
        var dog = 'Poke';       // var does not protect variables inside block scope
        var cat = 'Simon';      // dog and cat variables are accessible out side of the block scope
        console.log('Your account is valid!, your dog\'s name is ' + dog + ', and the cat is ' + cat);
    } else {
        console.log('You account or password did not match!, please check your name and password, and try again.');
    }
    console.log(dog, cat); // Poke Simon
}
// console.log(n, p, dog, cat);
accountVerification('Chris', 2345);

// ES6
function accountVerification1(name, passwd) {
    const n = 'Mike';
    let p = 8888;
    if (name === n && passwd === p) {
        const dog = 'Poke';
        let cat = 'Simon';
        console.log(`Your account is valid!, your dog's name is ${dog}, and the cat is ${cat}`);
    } else {
        console.log('You account or password did not match!, please check your name and password, and try again.');
    }
    // console.log(dog, cat); // letConstExam01.js: 43 Uncaught ReferenceError: dog is not defined
}
accountVerification1('Mike', 8888);