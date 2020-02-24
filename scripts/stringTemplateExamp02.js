///////////////////////////////////////////////////////////////////////////
// Template Strings Example 02
// 
const firstName = 'Chris'
const age = 49;
const pet = 'horse';

// The good old string concat method
const greeting = 'Hello ' + firstName + ' you seem to be ' + age +
    ' and look, what a lovely ' + pet + ' you have!';
console.log(greeting);

// Here is how the new string template works
const greetingNew = `Hello ${firstName} you seem to be ${age} and look, what a lovely ${pet} you have! `;
console.log(greetingNew);
