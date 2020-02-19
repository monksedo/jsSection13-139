/******************************************************************
 * Object.create
 */

const personProto = {
  calulateAge: function () {
    console.log(2016 - this.birthYear);
  }
};
var john = Object.create(personProto, {
  name: { value: 'John' },
  birthYear: { value: 1990 },
  job: { value: 'Teacher' }
});

const person = {}

const chris = Object.create(person);
chris.name = 'Chris';
chris.job = 'Programmer';
chris.birthYear = 1970;

chris.buzAddress = '5555 Street';
chris.city = 'Chicago';
chris.state = 'Illinois';
chris.Country = 'USA';

chris.home = {
  address: '22222 SW Park',
  city: 'New York',
  state: 'NY',
  country: 'USA'
}

chris.calculateAge = function (now) {
  return now - this.birthYear;
};

console.log(chris.calculateAge(2020));

console.log(chris.buzAddress);

console.log(chris.home);

console.log(chris);
