// Using strict mode
'use strict';

//Creating a 'STORE' with questions
//and answers
const STORE = [
    {
        question: 'Which team has the most NBA Championships?',
        answers: [
            'Los Angeles Lakers',
            'Golden State Warriors',
            'Boston Celtics',
            'San Antonio Spurs'
        ],
        correctAnswer: 'Boston Celtics',
        img: 'https://i.pinimg.com/originals/86/50/60/8650602027962970b176cac77eaa7411.jpg',
        alt: 'Boston Celtics Logo'
    },
    {
        question: 'What player has the most NBA MVP\'S?',
        answers: [
            'LeBron James',
            'Stephen Curry',
            'Michael Jordan',
            'Kareem Abdul-Jabbar'
        ],
        correctAnswer: 'Kareem Abdul-Jabbar',
        img: 'https://s22928.pcdn.co/wp-content/uploads/2017/10/CF3636CE-10FC-4D5C-8613-DCB1B15E1DA3-640x480.jpeg',
        alt: 'Picture of Kareem Abdul-Jabbar'
    },
    {
        question: 'Who was the first player to score 100 points in an NBA game?',
        answers: [
            'Kobe Bryant',
            'Kareem Abdul-Jabbar',
            'Bill Russell',
            'Wilt Chamberlain'
        ],
        correctAnswer: 'Wilt Chamberlain',
        img: 'http://images.performgroup.com/di/library/sporting_news/3/2/wilt-chamberlain-getty-ftr-032516_181cuk1zuprgx12az8w6j7npuj.jpg?t=-1360469973&w=960&quality=70',
        alt: 'Picture of Wilt Chamberlain'
    },
    {
        question: 'Who was the first unanimous NBA MVP?',
        answers: [
            'Michael Jordan',
            'Bill Russell',
            'Stephen Curry',
            'Lebron James'
        ],
        answer: 'Stephen Curry',
        img: 'https://media.nbcbayarea.com/images/652*368/StephCurryPoint.JPG',
        alt: 'Picture of Stephen Curry'
    },
    {
        question: 'What year was Kobe Bryant drafted?',
        answers: [
            '1995',
            '2000',
            '1996',
            '1994'
        ],
        answer: '1996',
        img: 'https://www.kstarcountry.com/website/wp-content/uploads/2016/06/1996.jpg',
        alt: 'Image of the numbers 1996'
    },
    {
        question: 'What team did Shaquille O\'Neal end his career with?',
        answers: [
            'Los Angeles Lakers',
            'Phoenix Suns',
            'Boston Celtics',
            'Miami Heat'
        ],
        answer: 'Boston Celtics',
        img: 'https://images.homedepot-static.com/productImages/f10649b1-73a2-4a69-963d-2d40fd77fae7/svn/green-applied-icon-wall-decals-nbop0203-64_1000.jpg',
        alt: 'Picture of Celtics Logo'
    },
    {
        question: 'Who was the last player to enter the NBA straight from high school and win MVP?',
        answers: [
            'Kobe Bryant',
            'Dwight Howard',
            'Kevin Garnett',
            'LeBron James'
        ],
        answer: 'LeBron James',
        img: 'http://images.performgroup.com/di/library/omnisport/51/a3/james-lebron-usnews-122518-ftr-getty_siuf4a1hwr3012nmvds7ct7ly.jpg?t=-412648713',
        alt: 'Picture of LeBron James'
    },
    {
        question: 'What year was the "Dream Team" Assembled?',
        answers: [
            '1992',
            '1988',
            '2000',
            '2008'
        ],
        answer: '1992',
        img: 'http://www.montana-mint.com/wp-content/uploads/2016/11/1992.jpg',
        alt: 'Image of the numbers 1992'
    },
    {
        question: 'Who has the most rebounds in NBA history?',
        answers: [
            'Hakeem Olajuwon',
            'Shaquille O\'Neal',
            'Tim Duncan',
            'Wilt Chamberlain'
        ],
        answer: 'Wilt Chamberlain',
        img: 'http://images.performgroup.com/di/library/sporting_news/3/2/wilt-chamberlain-getty-ftr-032516_181cuk1zuprgx12az8w6j7npuj.jpg?t=-1360469973&w=960&quality=70',
        alt: 'Picture of Wilt Chamberlain'
    },
    {
        question: 'Who has the most NBA All-Star MVP\'S?',
        answers: [
            'LeBron James',
            'Kobe Bryant',
            'Michael Jordan',
            'Irvin "Magic" Johnson'
        ],
        answer: 'Kobe Bryant',
        img: 'https://cdn.theatlantic.com/assets/media/img/mt/2016/04/RTX1XNM3/lead_720_405.jpg?mod=1533691815',
        alt: 'Picture of Kobe Bryant'
    }
];

//Set question number and score to 0
//will increment
let questionNumber = 0;
let score = 0;

//Create HTML questions
function generateQuestion() {
    //Find a way to create questions here
    if (questionNumber < STORE.length) {
        return `<div class="question-${questionNumber}"
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    </fieldset>
    </form>
    </div>`;
    } else {
        renderResults();
        restartQuiz();
        $('.questionNumber').text(10)
    }
}

//increment question number
function changeQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber+1);
}

//increment score
function changeScore() {
    score++;
}

//start quiz
function startQuiz() {
    $('.mid-text').on('click', '.quiz-start', function (event) {
        $('.mid-text').remove();
        $('.question-answer-form').css('display', 'block');
        $('.questionNumber').text(1);
    });
}

//render question in DOM
function renderQuestion() {
    $('.question-answer-form').html(generateQuestion());
}

function userSelectAnswer () {
    $('form').on('submit', function (event) {
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
            selected.parent().addClass('correct');
            ifAnswerIsCorrect();
        } else {
            selected.parent().addClass('wrong');
            ifAnswerIsWrong();
        }
    });
}

function ifAnswerIsCorrect () {
    userAnswerFeedbackCorrect();
    updateScore();
}

function ifAnswerIsWrong () {
    userAnswerFeedbackWrong();
}

function userAnswerFeedbackCorrect () {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.question-answer-form').html(`<div class="correctFeedback"><div class="img"><img src="${STORE[questionNumber].img}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

function userAnswerFeedbackWrong () {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    // let img = `${STORE[questionNumber].img}`;
    $('.question-answer-form').html(`<div class="correctFeedback"><div class="img"><img src="${STORE[questionNumber].img}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

function updateScore () {
    changeScore();
    $('.score').text(score);
}

function renderResults () {
    if (score >= 8) {
        $('.question-answer-form').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><img src="https://cbsbaltimore.files.wordpress.com/2013/05/168129357.jpg?w=1024&h=576&crop=1" alt="mvp trophy"/><p>You got ${score} / 10</p><p>You are the real MVP!</p><button class="restartButton">Restart Quiz</button></div>`);
    } else if (score < 8 && score >= 5) {
        $('.question-answer-form').html(`<div class="results correctFeedback"><h3>Almost there!</h3><img src="https://imagesvc.timeincapp.com/v3/fan/image?url=https://thunderousintentions.com/wp-content/blogs.dir/157/files/2016/09/9289203-stephen-curry-nba-stephen-curry-mvp-press-conference.jpg&c=sc&w=850&h=566" alt="Curry standing next to two mvp awards"/><p>You got ${score} / 10</p><p>You almost got one of these!</p><button class="restartButton">Restart Quiz</button></div>`);
    } else {
        $('.question-answer-form').html(`<div class="results correctFeedback"><h3>You might want to stick with car camping</h3><img src="https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/ccfwgvvfzrrlhno2fb0c.jpg" alt="Jordan crying"/><p>You got ${score} / 10</p><p>With a little more studying of NBA history you will be a real MVP</p><button class="restartButton">Restart Quiz</button></div>`);
    }
}

function renderNextQuestion () {
    $('main').on('click', '.nextButton', function (event) {
        changeQuestionNumber();
        renderQuestion();
        userSelectAnswer();
    });
}

function restartQuiz () {
    $('section').on('click', '.restartButton', function (event) {
        location.reload();
    });
}

function createQuiz () {
    startQuiz();
    renderQuestion();
    userSelectAnswer();
    renderNextQuestion();
}

$(createQuiz);