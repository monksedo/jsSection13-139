/////////////////////////////////////////////////////////////////////
// Immediately Involked Function Expressions (IIFE)
//

var chris = {
  name: 'Chris',
  age: 50,
  job: 'Programmer',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m a ' + this.name + ', I am a ' + this.job + ' and I am ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    } else if (style === 'friendly') {
      console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

chris.presentation('formal', 'morning');
chris.presentation('friendly', 'evening');

chris.presentation.call(emily, 'formal', 'afternoon');
// chris.presentation.apply(emily, ['friendly', 'afternoon']);

var chrisFriendly = chris.presentation.bind(chris, 'friendly');
chrisFriendly('morning');

var emilyFormal = chris.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
