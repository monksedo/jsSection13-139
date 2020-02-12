/////////////////////////////////////////////////////////////////////////////
// Advanced Object Example Code

// Reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// Context vs Scope
const object4 = {
  a: function () {
    console.log(this);
  }
}

// Instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name} I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`We I'm a ${this.type}`);
  }
}

const wizard1 = Wizard('Chris', 'Healer');
const wizard2 = Wizard('John', 'Dark Magic');

