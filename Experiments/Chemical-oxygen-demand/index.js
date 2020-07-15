const quizQuestion = document.getElementById('quiz-question');
const questionIndex = document.getElementById('question-number');
const options = document.getElementById("quiz-options");
const score = document.getElementById("score");
const header = document.getElementById("header");
const nextButton = document.getElementById('next');
const actions = document.getElementById('actions');
const correct = document.getElementById('correct');
const answered = document.getElementById('Correct');

var available = quiz;
var duration = 0.3;
var questionNumber = 0, s = 0,c=0;
var availableClicks;
var usedClicks = false;
var answeredQuestion = 0;
function getNewQuestion() {
    questionNumber++;
    answeredQuestion=0;
    const question = available[Math.floor(Math.random() * available.length)];
    // console.log(question);
    quizQuestion.innerText = question.question;
    getOptionsAndCheckAnswer(question.options, question.answer)
    const usedQuestion = available.indexOf(question);
    available.splice(usedQuestion, 1);
    questionIndex.innerText = questionNumber;
    // console.log(available);
}
function getOptionsAndCheckAnswer(opts, answers) {
    availableClicks = answers.length;
    shuffleArray(opts);
    opts.map(q => {
        var div = document.createElement('div');
        div.className = "bg-option";
        div.classList.add('option','rounded');
        div.style.animationDuration = (duration+=0.2).toString() + 's';
        div.innerText = q;
        div.addEventListener('click', () => {
            if (availableClicks != 0) {
                if (answers.indexOf(q) >= 0) {
                    s += 10;
                    score.innerText = s;
                    div.classList.remove("bg-option");
                    div.classList.add("bg-success","text-light");
                } else {
                    div.classList.remove("bg-option");
                    div.classList.add("bg-danger","text-light");
                }
                availableClicks--;
                // console.log(score);
            };
            if (availableClicks == 0) {
                const answer = opts.filter((ans) => { return answers.indexOf(ans) >= 0; });
                for (let i = 0; i <= opts.length; i++) {
                    if (options.children[i] != null) {
                        if (answer.indexOf(options.children[i].innerHTML) >= 0) {
                            if (!options.children[i].classList.contains("bg-success")) {
                                options.children[i].classList.remove("bg-option");
                                options.children[i].classList.add("bg-success",'text-light');
                                options.children[i].classList.add("correctAnswer");
                            }else{
                                answeredQuestion+=1
                            }
                        }
                    }
                }
                if(answeredQuestion==answer.length){
                    c+=1;
                    correct.innerText = c;
                }
            }
        });
        options.appendChild(div);
    });
    duration = 0.3;
}
function clearOpions() {
    if (options.hasChildNodes()) {
        var child = options.lastChild;
        while (child) {
            options.removeChild(child);
            child = options.lastChild;
        }
    }
}
function clearQuestion(){
    quizQuestion.innerText = '';
}

function ResultPage(){
    clearOpions();
    clearQuestion();
    var div = document.createElement('div');
    var proceed = document.createElement('button');
    var retry = document.createElement('button');
    const alert = document.createElement('div');
    if(header.hasChildNodes()){
        var child = header.lastChild;
        while(child){
            header.removeChild(child);
            child = header.lastChild;
        }
    }
    div.className='text-center';
    header.classList.remove('bg-success');
    header.classList.add('bg-primary');
    div.innerText = 'Result';
    header.appendChild(div);
    quizQuestion.classList.add('text-center');
    quizQuestion.style.fontSize = '70px'
    quizQuestion.innerText = Math.floor(s/70*100).toString()+'%';
    nextButton.remove();
    proceed.className = 'btn';
    proceed.classList.add('btn-sm','btn-outline-success','pl-3','pr-3','ml-3');
    proceed.innerText = 'Proceed';
    proceed.addEventListener('click',()=>{
        if(Math.floor(s/70*100)>=70){
            location.href = './experiment.html'
        }else{
            alert.style.fontSize = '80%';
            alert.classList.add('alert','alert-danger');
            alert.innerText='You need atleast 70% score to proceed to the experiment.';
            options.appendChild(alert);
        }
    });
    retry.className = 'btn';
    retry.classList.add('btn-sm','btn-outline-info','pl-3','pr-3');
    retry.innerText = "Try Again";
    retry.addEventListener('click',()=>{
        location.href = './landing-page.html'
    });
    answered.remove();
    actions.appendChild(retry);
    actions.appendChild(proceed);
    options.appendChild(showResult(`Your Score: ${s}`));
    options.appendChild(showResult(`Successfully Answered Questions: ${c}`));
}

function showResult(content){
    var div = document.createElement('div');
    var span = document.createElement('span');
    div.classList.add('result','p-2','card-subtitle','align-items-center','mt-3');
    span.classList.add('text-dark');
    span.innerText = content;
    div.style.animationDuration = (duration+=0.2).toString() + 's';
    div.appendChild(span);
    (Math.floor(s/70*100)>=70)?
        div.appendChild(icon('&#x2713;')):div.appendChild(icon('&#x274C;'));
    return div;
}

function alert(){

}

function icon(icon){
    var span = document.createElement('span');
    span.classList.add('float-right');
    if(Math.floor(s/70*100)>=70){
        span.classList.add('text-success');
    }else{
        span.classList.add('text-danger');
    }
    span.innerHTML = icon
    return span;
}
nextButton.addEventListener('click',next);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function next() {
    if (questionNumber === 5) {
        ResultPage();
    } else {
        console.log(questionNumber)
        clearOpions();
        getNewQuestion();
    }
}

window.onload = () => {
    getNewQuestion();
}