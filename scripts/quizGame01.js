/////////////////////////////////////////////////////////////////////
// CODING CHALLENGE - BASIC CONSOLE QUIZ GAME
//
/*
1. Build a function constructor called Question to describe a question.A question should include:
a.Question itself
b.The multiple choises answers(Choose an adequate data structure here, array, object, etc.)
c.A correct answer(use number answer options)

2. Creat a couple of questions using the constructor

3. Store all question inside and array.

4. Select one random question and log it on the colole, together with the answers(Each question should start with a number ex: 1. Question; 2. Question...)

5. Use the prompt function to ask the user for the correct answer.The user should input the number of the correct answer such as you desplayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in the code.So make sure that all your code is private and don't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*

// IIFE Code privacy setup
(function () {

  // Function Constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

  // displayQuestion method
  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    // console.log(this.correct);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(this.answers[i]);
    }
  };

  // checkAnswer method
  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Correct Answer!');
    } else {
      console.log('Incorect Answer, try again!');
    }
  }

  // Create Questions
  const q1 = new Question(
    'Q1. What is one feature that distinguishes Homo sapiens from its predicessors?',
    [
      'A. complex spoken language',
      'B. ability to control complex tools',
      'C. bipedalism'
    ], 'a');

  const q2 = new Question(
    'Q2. Which evolutionary theory suggests that early hominids adapted more easily to dry climates?',
    [
      'A. the savannah hypothesis',
      'B. the aridity hypothesis',
      'C. the oasis theory'
    ], 'b');

  const q3 = new Question(
    'Q3. What is the most widely accepted theory about human migration to the Americas?',
    [
      'A. They traveled by sea, from East Asia',
      'B. They traveled by land, crossing the Bering land bridge',
      'C. They traveled by sea, from West Afric'
    ], 'b');

  const q4 = new Question(
    'Q4. Which early hominid species was one of the first to control fire and migrate to new regions?',
    [
      'A. Homo habilis',
      'B. Homo sapiens',
      'C. Homo erectus'
    ], 'c');

  const q5 = new Question(
    'Q5. Why is it difficult for historians to study early human societies?',
    [
      'A. There are no surviving artifacts or fossils from that time',
      'B. Written records from that time are indecipherable or meaningless',
      'C. Before the advent of writing, historians had fewer and less detailed resources to work with'
    ], 'c');

  const q6 = new Question(
    'Q6. Artifacts are best described as',
    [
      'A. objects made by humans',
      'B. objects made with iron tools',
      'C. naturally occurring objects'
    ], 'a');

  const q7 = new Question(
    'Q7. What\'s the difference between carbon dating and stratigraphic dating?',
    [
      'A. Stratigraphic dating uses the content of the fossils or artifacts themselves to place them in time; carbon dating relies on the layers of earth surrounding fossils or artifacts',
      'B. Carbon dating places fossils or artifacts in time by measuring their radiocarbon content stratigraphic dating relies on the layers of earth surrounding those fossils or artifacts',
      'C. Stratigraphic dating is a type of radioactive dating that only applies to matter which was once living'
    ], 'b');

  const q8 = new Question(
    'Q8. Evidence for the widespread use of language by humans during the Paleolithic includes:',
    [
      'A. Various written inscriptions found at Paleolithic sites',
      'B. The ability to hunt animals for food',
      'C. Long - distance travel and trade, and the organization of complex social and cultural structures'
    ], 'c');

  const q9 = new Question(
    'Q9. One reason for increased human cooperation and group organization during the Paleolithic was that:',
    [
      'A. Religious beliefs required social groups',
      'B. It allowed for division of labor and specialization to better exploit resources',
      'C. Agriculture was only possible with organized groups'
    ], 'b');

  const q10 = new Question(
    'Q10. Paleolithic(“Stone Age”) refers to the fact that during this period humans:',
    [
      'A. Used stone exclusively as a building material',
      'B. Began using stone tools to manipulate their environments',
      'C. Painted on the stone walls of caves'
    ], 'b');

  const q11 = new Question(
    'Q11. Agriculture had an advantage over hunting and foraging because it:',
    [
      'A. Required less labor than hunting and foraging',
      'B. Allowed for greater mobility',
      'C. Improved the regularity and efficiency of food supplies'
    ], 'c');

  // Store all questions in and array
  const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];

  const indexNum = Math.floor(Math.random() * questions.length);

  questions[indexNum].displayQuestion();

  let answer = prompt('Please select the correct answer.');
  answer = answer.toLowerCase();

  questions[indexNum].checkAnswer(answer);

})();

*/

//////////////////////////////////////////////////////////////////////////////////////////////
// Advance Level World History Quiz
//

// IIFE Code privacy setup
(function () {

  // Function Constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

  // displayQuestion method
  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    // console.log(this.correct);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(this.answers[i]);
    }
  };

  // checkAnswer method
  Question.prototype.checkAnswer = function (ans, keepScore) {
    let score = 0;
    if (ans === this.correct) {
      console.log('Correct Answer!');
      score = keepScore(true);
    } else {
      console.log('Incorect Answer, try again!');
      score = keepScore(false);
    }
    this.displayScore(score);
  }

  Question.prototype.displayScore = function (score) {
    console.log('Your current score is: ' + score);
    console.log('--------------------------------------------------------------------------------');
  }

  // Create Questions
  const q1 = new Question(
    'What is one feature that distinguishes Homo sapiens from its predicessors?',
    [
      'A. complex spoken language',
      'B. ability to control complex tools',
      'C. bipedalism'
    ], 'a');

  const q2 = new Question(
    'Which evolutionary theory suggests that early hominids adapted more easily to dry climates?',
    [
      'A. the savannah hypothesis',
      'B. the aridity hypothesis',
      'C. the oasis theory'
    ], 'b');

  const q3 = new Question(
    'What is the most widely accepted theory about human migration to the Americas?',
    [
      'A. They traveled by sea, from East Asia',
      'B. They traveled by land, crossing the Bering land bridge',
      'C. They traveled by sea, from West Afric'
    ], 'b');

  const q4 = new Question(
    'Which early hominid species was one of the first to control fire and migrate to new regions?',
    [
      'A. Homo habilis',
      'B. Homo sapiens',
      'C. Homo erectus'
    ], 'c');

  const q5 = new Question(
    'Why is it difficult for historians to study early human societies?',
    [
      'A. There are no surviving artifacts or fossils from that time',
      'B. Written records from that time are indecipherable or meaningless',
      'C. Before the advent of writing, historians had fewer and less detailed resources to work with'
    ], 'c');

  const q6 = new Question(
    'Artifacts are best described as',
    [
      'A. objects made by humans',
      'B. objects made with iron tools',
      'C. naturally occurring objects'
    ], 'a');

  const q7 = new Question(
    'What\'s the difference between carbon dating and stratigraphic dating?',
    [
      'A. Stratigraphic dating uses the content of the fossils or artifacts themselves to place them in time; carbon dating relies on the layers of earth surrounding fossils or artifacts',
      'B. Carbon dating places fossils or artifacts in time by measuring their radiocarbon content stratigraphic dating relies on the layers of earth surrounding those fossils or artifacts',
      'C. Stratigraphic dating is a type of radioactive dating that only applies to matter which was once living'
    ], 'b');

  const q8 = new Question(
    'Evidence for the widespread use of language by humans during the Paleolithic includes:',
    [
      'A. Various written inscriptions found at Paleolithic sites',
      'B. The ability to hunt animals for food',
      'C. Long - distance travel and trade, and the organization of complex social and cultural structures'
    ], 'c');

  const q9 = new Question(
    'One reason for increased human cooperation and group organization during the Paleolithic was that:',
    [
      'A. Religious beliefs required social groups',
      'B. It allowed for division of labor and specialization to better exploit resources',
      'C. Agriculture was only possible with organized groups'
    ], 'b');

  const q10 = new Question(
    'Paleolithic (“Stone Age”) refers to the fact that during this period humans:',
    [
      'A. Used stone exclusively as a building material',
      'B. Began using stone tools to manipulate their environments',
      'C. Painted on the stone walls of caves'
    ], 'b');

  const q11 = new Question(
    'Agriculture had an advantage over hunting and foraging because it:',
    [
      'A. Required less labor than hunting and foraging',
      'B. Allowed for greater mobility',
      'C. Improved the regularity and efficiency of food supplies'
    ], 'c');

  // Store all questions in and array
  const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];

  function updateScore() {
    let score = 0;
    return function (correct) {
      if (correct) {
        score++;
      }
      return score;
    }
  }

  const keepScore = updateScore();

  // nextQuestion function
  function nextQuestion() {

    const indexNum = Math.floor(Math.random() * questions.length);

    questions[indexNum].displayQuestion();

    let answer = prompt('Please enter a, b, or c to select your answer. or type Exit to stop the quiz');
    answer = answer.toLowerCase();

    if (answer !== 'exit') {
      questions[indexNum].checkAnswer(answer, keepScore);
      nextQuestion();
    }
  }
  nextQuestion();

})();




































/*
Where did human come from?

Q1. What is one feature that distinguishes Homo sapiens from its predicessors?
0 A. complex spoken language (0 is correct)
1 B. ability to control complex tools
2 C. bipedalism

Q2. Which evolutionary theory suggests that early hominids adapted more easily to dry climates?
0 A. the savannah hypothesis
1 B. the aridity hypothesis (1 is correct)
2 C. the oasis theory

Q3. What is the most widely accepted theory about human migration to the Americas?
0 A. They traveled by sea, from East Asia
1 B. They traveled by land, crossing the Bering land bridge (1 is correct)
2 C. They traveled by sea, from West Africa

Q4. Which early hominid species was one of the first to control fire and migrate to new regions?
0 A. Homo habilis
1 B. Homo sapiens
2 C. Homo erectus (2 is correct)

Knowing prehistory

Q5. Why is it difficult for historians to study early human societies?
0 A. There are no surviving artifacts or fossils from that time
1 B. Written records from that time are indecipherable or meaningless
2 C. Before the advent of writing, historians had fewer and less detailed resources to work with (2 is correct)

Q6. Artifacts are best described as
0 A. objects made by humans (0 is correct)
1 B. objects made with iron tools
2 C. naturally occurring objects

Q7. What's the difference between carbon dating and stratigraphic dating?
0 A. Stratigraphic dating uses the content of the fossils or artifacts themselves to place them in time; carbon dating relies on the layers of earth surrounding fossils or artifacts

1 B. Carbon dating places fossils or artifacts in time by measuring their radiocarbon content; stratigraphic dating relies on the layers of earth surrounding those fossils or artifacts (1 is correct)

2 C. Stratigraphic dating is a type of radioactive dating that only applies to matter which was once living

Paleolithic life

Q8. Evidence for the widespread use of language by humans during the Paleolithic includes:
0 A. Various written inscriptions found at Paleolithic sites
1 B. The ability to hunt animals for food
2 C. Long-distance travel and trade, and the organization of complex social and cultural structures (2 is correct)

Q9. One reason for increased human cooperation and group organization during the Paleolithic was that:
0 A. Religious beliefs required social groups
1 B. It allowed for division of labor and specialization to better exploit resources (1 is correct)
2 C. Agriculture was only possible with organized groups

Q10. Paleolithic (“Stone Age”) refers to the fact that during this period humans:
0 A. Used stone exclusively as a building material
1 B. Began using stone tools to manipulate their environments (1 is correct)
2 C. Painted on the stone walls of caves

Q11. Agriculture had an advantage over hunting and foraging because it:
0 A. Required less labor than hunting and foraging
1 B. Allowed for greater mobility
2 C. Improved the regularity and efficiency of food supplies (2 is correct)

*/



/////////////////////////////////////////
// Advance level
/*
8. After you display the result, display the next random question, so that a game never ends (Hint: write a function for this and call it right after displaying the result).

9. Be careful: After Task 8, the game literally never ends. so include the option to quit the game if the user writes 'exit' instead of the answer. In this case, don't call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, and 1 point to the score (Hint: I am going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

