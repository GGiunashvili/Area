// Quiz result options in a separate object for flexibility
var resultOptions = [
    {   title: '<p class="product-name-title">ჩვენი აზით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">მარშალის ყურსასმენი 0</p><a href="https://extra.ge/detailed/eleqtronika/kompiuteruli-teqnika/noutbuqis-aqsesuarebi/qursasmeni/qursasmeni-marshall-major-iii-bluetooth-black-4235" ></p><img src="image/valentines.png"/></a> <div class="result-button-box"><a class="sex-box__btn "> <p class="sex-box__btn__p">განაგრძე შოპინგი</p> </a> <a class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">დაათვალიერე პროდუქცია</p> </a></div>'},
    {   title: 'You Are That Thing',
        desc: '<p>წიგნი ბიჭისთვის 1</p><a href="https://www.youtube.com/watch?v=8t9xaWfN5BA" ></p><img src="https://i.imgur.com/NH5cunw.png"/></a>'},
    {   title: 'You Are This Other Thing',
        desc: '<p>კაცის საათი 2</p><a href="https://www.youtube.com/watch?v=8t9xaWfN5BA" ></p><img src="https://i.imgur.com/NH5cunw.png"/></a>'},
    {   title: 'You Are This One Thing',
        desc: '<p>სასაჩუქრე 200 3</p><a href="https://www.youtube.com/watch?v=8t9xaWfN5BA" ></p><img src="https://i.imgur.com/NH5cunw.png"/></a>'},
    {   title: 'You Are This One Thing',
        desc: '<p>კაცის მოვლის ნაკრები 4</p><a href="https://www.youtube.com/watch?v=8t9xaWfN5BA" ></p><img src="https://i.imgur.com/NH5cunw.png"/></a>'},
    {   title: 'You Are This One Thing',
        desc: '<p>5</p><a href="https://www.youtube.com/watch?v=8t9xaWfN5BA" ></p><img src="https://i.imgur.com/NH5cunw.png"/></a>'},
    {   title: 'You Are This One Thing',
        desc: '<p>6</p><a href="https://www.youtube.com/watch?v=8t9xaWfN5BA" ></p><img src="https://i.imgur.com/NH5cunw.png"/></a>'},
    {   title: 'You Are This One Thing',
        desc: '<p>7</p><a href="https://www.youtube.com/watch?v=8t9xaWfN5BA" ></p><img src="https://i.imgur.com/NH5cunw.png"/></a>'},
    {   title: 'You Are This One Thing',
        desc: '<p>8</p><a href="https://www.youtube.com/watch?v=8t9xaWfN5BA" ></p><img src="https://i.imgur.com/NH5cunw.png"/></a>'},
    {   title: 'You Are This One Thing',
        desc: '<p>9</p><a href="https://www.youtube.com/watch?v=8t9xaWfN5BA" ></p><img src="https://i.imgur.com/NH5cunw.png"/></a>'}
];
    
// global variables
var quizSteps = $('#quizzie .quiz-step'),
    totalScore = 0;

    var answ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var lastUpdate = 0;
    var step = 0;
    var clickedIndex = -1;

function check() {
    if (clickedIndex < 0) return;

    var currentStep = quizSteps[step];
    var ansOpts = currentStep.getElementsByClassName("quiz-answer");
    var anss = ansOpts[clickedIndex];
    var value = $(anss).attr('data-quizIndex');
    var answerScore = parseInt(value);
        answ[value] = answ[value] + 1;
        lastUpdate = value;
    // check to see if an answer was previously selected
    if ($(currentStep).children('.active').length > 0) {
        var wasActive = currentStep.children('.active'),
            oldScoreValue = $(wasActive).attr('data-quizIndex'),
            oldScore = parseInt(oldScoreValue);
        // handle visual active state
        $(currentStep).children('.active').removeClass('active');
       // $this.addClass('active');
        // handle the score calculation
        totalScore -= oldScoreValue;
        totalScore += answerScore;
        calcResults(totalScore);
    } else {
        // handle visual active state
        $(currentStep).addClass('active');
        // handle score calculation
        totalScore += answerScore;
        calcResults(totalScore);
        // handle current step
        updateStep(currentStep);
    }

    clickedIndex = -1;
    step++;
}

var elements = document.getElementsByClassName("sex-box__btn");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', check, false);
}

// for each step in the quiz, add the selected answer value to the total score
// if an answer has already been selected, subtract the previous value and update total score with the new selected answer value
// toggle a visual active state to show which option has been selected
quizSteps.each(function () {
    var currentStep = $(this),
        ansOpts = currentStep.children('.quiz-answer');
    // for each option per step, add a click listener
    // apply active class and calculate the total score
    ansOpts.each(function () {
        var eachOpt = $(this);
     
        eachOpt[0].addEventListener('click', clk, false);

       function clk() {
           var $this = $(this);
           clickedIndex = $this.attr('data-itemIndex');
       }
    });
});

// show current step/hide other steps
function updateStep(currentStep) {
    if($(currentStep).hasClass('current')){
        $(currentStep).removeClass('current');
        $(currentStep).next().addClass('current');
    }
}

// display scoring results
function calcResults(totalScore) {
    // only update the results div if all questions have been answered
    if (step + 1 == quizSteps.length){
        var resultsTitle = $('#results h1'),
            resultsDesc = $('#results .desc');
        
        // calc lowest possible score
        var lowestScoreArray = $('#quizzie .low-value').map(function() {
            return $(this).attr('data-quizIndex');
        });
        var minScore = 0;
        for (var i = 0; i < lowestScoreArray.length; i++) {
            minScore += lowestScoreArray[i] << 0;
        }
        // calculate highest possible score
        var highestScoreArray = $('#quizzie .high-value').map(function() {
            return $(this).attr('data-quizIndex');
        });
        var maxScore = 0;
        for (var i = 0; i < highestScoreArray.length; i++) {
            maxScore += highestScoreArray[i] << 0;
        }
        // calc range, number of possible results, and intervals between results
        var range = maxScore - minScore,
            numResults = resultOptions.length,
            interval = range / (numResults - 1),
            increment = '',
            n = 0; //increment index
        // incrementally increase the possible score, starting at the minScore, until totalScore falls into range. then match that increment index (number of times it took to get totalScore into range) and return the corresponding index results from resultOptions object
        while (n < numResults) {
            increment = minScore + (interval * n);
            if (totalScore <= increment) {
                // populate results

                var max = 0;
                for (var i = 0; i < 10; i++) {
                    if (answ[i] == max && i == lastUpdate) {
                        max = answ[i];
                        n = i;
                    } else if (answ[i] > max) {
                        max = answ[i];
                        n = i;
                    }
                }

                resultsTitle.replaceWith("<h1>" + resultOptions[n].title + "</h1>");
                resultsDesc.replaceWith("<p class='desc'>" + resultOptions[n].desc + "</p>");
                return;
            } else {
                n++;
            }
        }
    }
}