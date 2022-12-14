var readlineSync = require('readline-sync');
var userName = readlineSync.question("May I have your name ? ");
console.log("Welcome " + userName + " lets play," + "\nHow well you know me. " + "\n");

var questions = [
  {
    question: "Q1 - Am I older than 25? ",
    answer: "yes"
  },
  {
    question: "Q2 - Am I from city Agra? ",
    answer: "yes"
  },
  {
    question: "Q3 - Am I graduate? ",
    answer: "yes"
  },
  {
    question: "Q4 - Which brand's laptop do I own? ",
    answer: "dell"
  },
  {
    question: "Q5 - Which skill I am learning in neog camp level zero? ",
    answer: "coding"
  },
  {
    question: "Q6 - Do I know how to ride a bike? ",
    answer: "yes"
  },

  {
    question: "Q7 - which brand's smartphone do I own? ",
    answer: "realme"
  },

  {
    question: " Q8 - Name one US Television show which I like to watch? ",
    answer: "friends"
  },
]

var score = 0

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log(" YAY! You are right! your score is ")
    score++

  } else {
    console.log(" Sorry you are wrong. ")
  }
  console.log("score is ", score)

}

for (var i = 0; i < questions.length; i++) {
  var currentQues = questions[i]
  play(currentQues.question, currentQues.answer)
}
console.log("\nThis ends the quiz.Thank You.")
console.log("-----------------------------")
console.log(userName + " Your final score is", score)

//highest score message
if (score === 8) {
  console.log("Amazing.. you know me really well")
}

//highscores Data
var highScores = [{
  name: "Abhishek",
  score: 8
},
{
  name: "Gaurav",
  score: 7
}
  ,
{
  name: "Ashutosh",
  score: 6
}
]
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i])
  console
}
console.log("-------------------------------")
console.log("\nSend me your scores screenshot If you beat the highscores")