// ES6 Function Constructor Example

function Person(name) {
    this.name = name;
}

const friends = ['Bob', 'Chris', 'Mike'];

// ES5 
Person.prototype.myFriends = function (friends) {
    var arr = friends.map(function (val) {
        return this.name + ' is friends with ' + val;
    }.bind(this));
    console.log(arr);
}
new Person('Mark').myFriends(friends);


// ES6 
Person.prototype.myFriends1 = function (friends) {
    const arr = friends.map(val => `${this.name} is friends with ${val}`);
    console.log(arr);
}
new Person('Tim').myFriends1(friends);