//////////////////////////////////////////////////////////////////////////////
// Arrow functions 2


// ES5 example
var box = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this; // This keyword hack in ES5
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
// box.clickMe();

// ES6 Example 1
const box1 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            const str = `This is box ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
box1.clickMe();

// ES6 Example 2
const box2 = {
    color: 'green',
    position: 1,
    clickMe: () => { // Using arrow function here will point this keyword to windows object not the box2 object
        document.querySelector('.green').addEventListener('click', () => {
            const str = `This is box ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
// box2.clickMe();

