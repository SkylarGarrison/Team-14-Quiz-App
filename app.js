/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
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