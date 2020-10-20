// store variable is going to contain the questions the anwsers if quiz has started questio number and the score
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
//FIRST PAGE STUFF
//this render function takes in the parameter of quizstarted from store if false it will send to startPage if true it will send to question page function
function render(){
  if(store.quizStarted === false){
    $("main").html(startPage);
  }
}
//this function is going to have a div template to start out the app and a button with id="start" the button will begin the app 
function startPage(){
  let startPage = 
    `
      <div class="card">
        <h2>Welcome to our quiz</h2>
        <p>It's going to be fun and easy</p>
        <button id="start"></button> 
      </div>
    `;
  return startPage;
}

//begins from startPage function once the user clicks on the start button and sends to main function to render html 
function handleStartQuiz(){

}

//END OF FIRST PAGE STUFF
//SECOND PAGE AND BEYOND STUFF
// in this function it will render the html template for the questions and multiple forms
function questionPage(){

}


//END OF SECOND PAGE AND BEYOND STUFF
//this function is going to render all of the stubs
function main(){
    render();
}

$(main);