///////////////////////////////////////////////////////////////////////////
// Strings methods
// 

const firstName = 'Chris ';
const lastName = 'Nguyen';
const birthYear = 1970;
let job = 'Programmer';


function calcAge(currYear) {
    return age = currYear - birthYear;
}

function greeting() {
    let age = calcAge(2020);
    const message = `${firstName} ${lastName} was born in ${birthYear}, now he is ${age} years old, he is a ${job}!`;
    return message;
}

const str = greeting();

const search = str.startsWith('C');         // str.startWith('string');
const search2 = str.endsWith('mmer!');      // str.endsWidth('string);
const search3 = str.includes(50);           // str.includes('str');
const search4 = firstName.repeat(5);        // str.repeat(n);

console.log(search, search2, search3, search4);