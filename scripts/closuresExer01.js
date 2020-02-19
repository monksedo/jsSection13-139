///////////////////////////////////////////////////////////////////////////////////
// Closures Exercies 01 
//

function interviewQuestion(job) {
  var q1, q2, q3;
  q1 = (', can you please tell your us about your machanic work?');
  q2 = ('What subject do you teach, ');
  q3 = (', what do you do?');

  return function (name) {
    if (job === 'mechanic') {
      var message1 = name + q1;
      console.log(message1);
    } else if (job === 'teacher') {
      var message2 = q2 + name + '?';
      console.log(message2);
    } else {
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
