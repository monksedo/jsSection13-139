///////////////////////////////////////////////////////////////////////////
// Advanced Exercise Arrays
//

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arrayforEach = [];
const tempArr = array.forEach((n) => {
  arrayforEach.push(n.username + '!');
});
console.log(`forEach ${arrayforEach}`);


//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMap = array.map((n) => n.username + '!');
console.log(`Map ${arrayMap}`);


//Filter the array to only include users who are on team: red
const arrayFilter = array.filter((n) => {
  if (n.team === 'red') {
    console.log(`Filter Array ${n.username}`);
  }
});


//Find out the total score of all users using reduce
const arrayReduce = array.reduce((accum, n) => {
  return accum + n.score;
}, 0);
console.log(`Reduce Array, total score for all team = ${arrayReduce}`);

// (1), what is the value of i? = array index
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});

// (2), Make this map function pure:
const newArrayPure = arrayNum.map((num, i) => num * 2);
alert(newArrayPure);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const userList = array.map(n => {
  let name, item;
  name = n.username;
  // item = n.items;
  n.items = n.items.map(m => {
    item = m + '!';
    console.log(name, item);
    return item;
  });
  return n;
});
console.log(userList);
