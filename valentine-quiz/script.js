// Quiz result options in a separate object for flexibility
var resultOptions = [
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">მარშალის ყურსასმენი </p><a href="https://extra.ge/detailed/eleqtronika/kompiuteruli-teqnika/noutbuqis-aqsesuarebi/qursasmeni/qursasmeni-marshall-major-iii-bluetooth-black-4235" target="_blank" ></p> <div class="img-text"><img src="image/valentines.png"/> <p>როგორც ჩანს, შენს <3-ს თანამედროვე ტექნოლოგიების მიმართ განსაკუთრებული დამოკიდებულება აქვს და არც ონლაინ შოპინგია მისთვის უცხო. Marshall-ის ყურსასმენი ყველა ადამიანისთვის სასურველი საჩუქარია. თუ MASTERCARD-ით გადაიხდი მიიღებ დამატებით -20% ფასდაკლებას + უფასო მიწოდებას, სადაც არ უნდა იყოს. </p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/eleqtronika/kompiuteruli-teqnika/noutbuqis-aqsesuarebi/qursasmeni/qursasmeni-marshall-major-iii-bluetooth-black-4235" target="_blank" class="sex-box__btn "> <p class="sex-box__btn__p"> აჩუქე</p> </a> <a href="https://extra.ge/catalog/eleqtronika/kompiuteruli-teqnika/noutbuqis-aqsesuarebi/qursasmeni?type=2&current=1&prod=%7B%22598%22:%5B%22Bluetooth%22,%22%E1%83%A3%E1%83%A1%E1%83%90%E1%83%93%E1%83%94%E1%83%9C%E1%83%9D%22%5D%7D&sortType=1&sortBy=2" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">სხვა შემოთავაზებები</p> </a></div>'},
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">წიგნი ბიჭისთვის</p><a href="https://extra.ge/detailed/tsignebi/mkhatvruli-literatura/romani/dato-turashvili-skhva-amsterdami-59177" target="_blank" ></p> <div class="img-text"><img src="image/turashvili.png"/> <p>მისთვის ბუნებასა და წიგნებს განსაკუთრებული სიმშვიდის მოტანა შეუძლია. დათო ტურაშვილის „სხვა ამსტერდამი“ მას ჯერ კიდევ უცხო ჰოლანდიელებისა და ამსტერდამის აღმოჩენაში დაეხმარება. თუ ეს წიგნი უკვე იკავებს საოჯახო ბიბლიოთეკაში საპატიო ადგილს, მაშინ შეგიძლია სხვა შემოთავაზებები ნახო.</p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/tsignebi/mkhatvruli-literatura/romani/dato-turashvili-skhva-amsterdami-59177" target="_blank" class="sex-box__btn "> <p class="sex-box__btn__p">აჩუქე</p> </a> <a href="https://extra.ge/catalog/tsignebi?type=2&current=1&sortType=1&sortBy=2" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">სხვა შემოთავაზებები</p> </a></div>'},
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">კაცის საათი</p><a href="https://extra.ge/detailed/casio/modis-samqaro/mamakatsis-samosi/mamakatsis-aqsesuarebi/mamakatsis-saati/saati-a-158wa-1df-110939" target="_blank" ></p> <div class="img-text"><img src="image/valentines-1.png"/> <p>თუ კლასიკური სტილის მოყვარულია და თან აქსესუარების ტარებაც მოსწონს, Casio-ს ეს საათი სწორედ, რომ ოპტიმალური საჩუქარია. მისი შეძენა 115 ლარად შეგიძლია, ხოლო MASTERCARD-ით გადახდისას მიიღებ -20% ფასდაკლებას + უფასო მიწოდებას სასურველ მისამართზე.</p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/casio/modis-samqaro/mamakatsis-samosi/mamakatsis-aqsesuarebi/mamakatsis-saati/saati-a-158wa-1df-110939" target="_blank" class="sex-box__btn "> <p class="sex-box__btn__p">აჩუქე</p> </a> <a href="https://extra.ge/catalog/modis-samqaro/mamakatsis-samosi/mamakatsis-aqsesuarebi/mamakatsis-saati?type=2&current=1&sortType=1&sortBy=2" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">სხვა შემოთავაზებები</p> </a></div>'},
  
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">200 ლარიანი სასაჩუქრე ვაუჩერი</p><a href="https://extra.ge/detailed/sasachuqre-baratebi/vaucherebi/extra---sasachuqre-barati-157028" target="_blank" ></p> <div class="img-text"><img src="image/sasachuqre200.png"/> <p>როგორც ჩანს, მისთვის საჩუქრის შერჩევა სირთულეს არამარტო შენთვის წარმოადგენს, ამიტომ შეგვიძლია მას 200 ლარიანი ვაუჩერი ვაჩუქოთ ექსტრაზე და თავად გადაწყვიტოს ის, რაც გაუხარდება!</p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/sasachuqre-baratebi/vaucherebi/extra---sasachuqre-barati-157028" target="_blank" class="sex-box__btn "> <p class="sex-box__btn__p">აჩუქე</p> </a> <a href="https://extra.ge/catalog/sasachuqre-baratebi/vaucherebi" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">სხვა შემოთავაზებები</p> </a></div>'},
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">წვერის მოვლის ნაკრები</p><a href="https://extra.ge/detailed/beardge/silamaze-da-janmrteloba/mamakatsis-higiena/tsveris-movla/tsveris-balzami/tsveris-da-tmis-movlis-nakrebi-70814" target="_blank" ></p> <div class="img-text"><img src="image/valentines-2.png"/> <p>შეიძლება ბანალურად მოგეჩვენოს, მაგრამ თუ შენი ახალი რჩეული წვერს ატარებს, ეს ნაკრები სწორედ, რომ ზომიერი საჩუქარია. მისი შეძენა შეგიძლია 90 ლარად, ხოლო MASTERCARD-ით გადახდისას მიიღებ -20% ფასდაკლებას და უფასო მიწოდებას სასურველ მისამართზე. თუ წვერი მისთვის უცხოა, შეგიძლია ნახო სხვა შემოთავაზებები რომელიც ამ დღისთვის მოვამზადეთ.</p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/beardge/silamaze-da-janmrteloba/mamakatsis-higiena/tsveris-movla/tsveris-balzami/tsveris-da-tmis-movlis-nakrebi-70814" target="_blank" class="sex-box__btn "> <p class="sex-box__btn__p">აჩუქე</p> </a> <a href="https://extra.ge/catalog/silamaze-da-janmrteloba/mamakatsis-higiena?type=2&current=1&sortType=1&sortBy=2" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">სხვა შემოთავაზებები</p> </a></div>'},
    
    
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