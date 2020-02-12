/////////////////////////////////////////////////////////////////////////////////
// ES8 Features Example Code
//

// Example
let str = 'Turtle Rock';
console.log(str.padEnd(10));
console.log(str.padStart(20));

// Example1 
const fun = (a, b, c, d, ) => {
  console.log(a, c, d);
}
fun(1, 2, 3, 4);


// Exampl2

Object.values;
Object.entries;
Object.keys;

const obj = {
  username0: 'Chris',
  username1: 'Mike',
  username2: 'Mr. Grinch'
}

// Method keys
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key], index);
});

// Method values
Object.values(obj).forEach(value => {
  console.log(value);
});

// Method entries
Object.entries(obj).forEach(value => {
  console.log(value);
});

// entries with map
Object.entries(obj).map(value => {
  console.log(value[1] + value[0].replace('username', ' '));
});