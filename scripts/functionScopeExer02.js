///////////////////////////////////////////////////////////////////////////////
// Functions & Scope Exercises
//

function greeting() {
    const firstName = 'Chris';
    const lastName = 'Nguyen'
    alert(`Hello ${firstName} ${lastName}!`);
}

function goodBye(name) {
    alert(`Have a great day ${name}, goodbye!`);
}

greeting();
goodBye('Chris');

document.getElementById('task-3').addEventListener('click', greeting);

function combineString(str1, str2, str3) {
    const str = str1 + str2 + str3;
    return str;
}
const para1 = 'Good morning!, ';
const para2 = 'how do yo do? '
const para3 = 'wher are you from?';

alert(combineString(para1, para2, para3));