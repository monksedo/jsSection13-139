///////////////////////////////////////////////////////////////////////////////////
// Closures Exercies 01 
//

function interviewQuestion(job) {
  var q1 = (', can you please tell your us about your machanic work?');
  var q2 = ('What subject do you teach, ');
  var q3 = (', what do you do?');
  if (job === 'mechanic') {
    return function (name) {
      var message1 = name + q1;
      console.log(message1);
    }
  } else if (job === 'teacher') {
    return function (name) {
      var message2 = q2 + name + '?';
      console.log(message2);
    }
  } else {
    return function (name) {
      var message3 = name + q3;
      console.log(message3);
    }
  }
};

var question1 = interviewQuestion('mechanic');
var question2 = interviewQuestion('teacher');
var question3 = interviewQuestion('unknown');

question1('Chris');
question2('Ken');
question3('Tuan');
