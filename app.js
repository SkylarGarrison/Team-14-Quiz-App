const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is the sky?',
      answers: [
        'Red',
        'Pink',
        'Blue',
        'Purple'
      ],
      correctAnswer: 'Blue'
    },
    {
      question: 'What is the biggest planet in the solar system?',
      answers: [
        'Mars',
        'Pluto',
        'Earth',
        'Jupiter'
      ],
      correctAnswer: 'Jupiter'
    },
    {
      question: 'What part of the human skeleton protects the brain?',
      answers: [
        'The funny bone',
        'The skull',
        'The rib cage',
        'The coccyx'
      ],
      correctAnswer: 'The skull'
    },
    {
      question: 'What is the freezing point of water?',
      answers: [
        '32°F',
        '50°F',
        '10°C',
        '32°C'
      ],
      correctAnswer: '32°F'
    },
    {
      question: 'What is the scientific study of plants?',
      answers: [
        'Anatomy',
        'Petrology',
        'Botany',
        'Ornithology'
      ],
      correctAnswer: 'Botany'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
}

function startPageHTML() {
  return `<div class="wrapper">
  <header>
  <h1>Science Quiz</h1>
  </header>
  <div class="startPage">
  <p>Let's see how much you know about random science facts!</p>
  <button class="startButton" type="button" id = "start"> Start the Quiz!</button></div></div>`
}

function currentQuestionHTML(question) {
  let answer = question.answers
  return `
  <header class="head">
  <h1>Fun Science Quiz</h1>
  <p>Current Question: ${store.questionNumber + 1} out of ${store.questions.length}</p>
  <p>Score: ${store.score}</p>
</header>
<div class="form">
<form class="questions">
  <h3 class="Question"> ${question.question} </h3>
  <label for="answer-0">
      <input type="radio" id="answer-0" name="answer" value="${
        answer[0]
      }"required>${answer[0]}
    </label>
    <br>
  <label for="answer-1">
      <input type="radio" id="answer-1" name="answer" value="${answer[1]}">${
    answer[1]
  }
    </label>
    <br>
  <label for="answer-2">
      <input type="radio" id="answer-2" name="answer" value="${answer[2]}">${
    answer[2]
  }
    </label>
    <br>
  <label for="answer-3">
      <input type="radio" id="answer-3" name="answer" value="${answer[3]}">${
    answer[3]
  }
    </label>
    <div class="center">
  <button class="submitButton" type="submit">
      Submit Question
    </button>
    </div>
</form> 
</div>
`
}

function renderQuestion() {
  let question = store.questions[store.questionNumber]
  let questionHTML = currentQuestionHTML(question)
  $("main").html(questionHTML)
  $("form").submit(function (event) {
    event.preventDefault()
    let answer = $("input:radio[name=answer]:checked").val()

    if (answer === question.correctAnswer) {
      store.score++

      $("main").html(
        `<div class="correct">
        <h1>Yay Correct!</h1><p>You got question number ${
          store.questionNumber + 1
        } right! Good Job!</p><button class="next">Next</button>
        </div>`
      )
    } else {
      $("main").html(`
      <div class="correct">
        <h1>Incorrect :(</h1>
        <p>Try again! The correct answer was ${question.correctAnswer}! </p>
        <button class="next">Next</button>
        </div>
      `)
    }
    store.questionNumber++
  })
}

function next() {
  $("main").on("click", ".next", function () {
    let totalNumberOfQuestions = store.questions.length
    let currentQuestion = store.questionNumber
    if (currentQuestion >= totalNumberOfQuestions) {
      $("main").html(restartScreenHTML())
      $(".restart").click(function (event) {
        resetScore()
        renderStartPage()
      })
    } else {
      renderQuestion()
    }
  })
}

function renderStartPage() {
  $("main").html(startPageHTML())
  $("#start").on("click", function () {
    renderQuestion()
    next()
  })
}

function restartScreenHTML() {
  return `
    <div class='quiz-result'>
        <h2>Yay! You finished the Quiz!</h2>
        <p> You scored a ${(
          (store.score / store.questions.length) *
          100
        ).toFixed(0)}%!</p>
        <button type="button" class="restart"> Take the same quiz over again!</button>
    </div>
  `
}
function resetScore() {
  store.score = 0
  store.questionNumber = 0
}

$(renderStartPage)