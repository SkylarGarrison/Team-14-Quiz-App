/**
 * Example store structure
 */
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
      correctAnswer: 'The Skull'
    },
    {
      question: 'What color is the sky?',
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
};

//function will load the star page of the quiz
function render(){
  if(store.quizStarted === false){
    $("main").html(startPage);
  }
};

//function will have a div template that contains the information needed to start the quiz
function startPage(){
  let startPage = 
  `<div class="card">
      <h2>Welcome to our fun scientific quiz</h2>
      <p>It should be easy...if you know your stuff</p>
      <button id="start"></button> 
    </div>
  `;
return startPage;

}

// this function will render the first question once the "start" button is pushed
function handleStartQuiz(){

}

//this function will contain the information needed for each question in the quiz
function questionPage(){

}

function main(){
  render();
}

$(main);