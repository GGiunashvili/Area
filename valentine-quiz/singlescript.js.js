// Quiz result options in a separate object for flexibility
var resultOptions = [
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">სონის ყურსასმენი</p><a href="https://extra.ge/detailed/eleqtronika/kompiuteruli-teqnika/noutbuqis-aqsesuarebi/qursasmeni/qursasmeni-sony-wh-ch510-blue-36339" target="_blank" ></p> <div class="img-text"><img src="image/sony.png"/> <p>შენი ცხოვრების სტილი გვაფიქრებინებს, რომ ყველაზე მეტად ყურსასმენი გაგიხარებს <3-ს. არჩევანი Sony-ს უსადენო ყურსასმენზე შევაჩერეთ, რომლის შეძენასაც 144 ლარად შეძლებ, ხოლო Mastercard-ით გადახდისას კი მიიღებ დამატებით -20% ფასდაკლებას + უფასო მიწოდებას საქართველოს მასშტაბით. </p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/eleqtronika/kompiuteruli-teqnika/noutbuqis-aqsesuarebi/qursasmeni/qursasmeni-sony-wh-ch510-blue-36339" target="_blank" class="sex-box__btn result-single"> <p class="sex-box__btn__p">აჩუქე</p> </a> <a href="https://extra.ge/catalog/eleqtronika/kompiuteruli-teqnika/noutbuqis-aqsesuarebi/qursasmeni?type=2&current=1&prod=%7B%22598%22:%5B%22Bluetooth%22,%22%E1%83%A3%E1%83%A1%E1%83%90%E1%83%93%E1%83%94%E1%83%9C%E1%83%9D%22%5D%7D&sortType=1&sortBy=2" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">განაგრძე შოპინგი</p> </a></div>'},
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">ფოტოაპარატი</p><a href="https://extra.ge/detailed/eleqtronika/foto-video/fotoaparatebi/instax-mini-11-charcoal-grey-fotoaparati-119466" target="_blank" ></p> <div class="img-text"><img src="image/camera.png"/> <p>ცხოვრება ბევრი ლამაზი მომენტისგან შედგება, რომელიც დროთა განმავლობაში შეიძლება დაგვავიწყდეს. მეგობრული შეკრებების დროს Fujifilm-ის ფოტოაპარატით შეძლებ მყისიერად დაბეჭდო სასურველი მოგონება. შეიძინე Mastercard-ით და მიიღე დამატებით -20% ფასდაკლება + უფასო მიწოდება მთელი საქართველოს მასშტაბით!.</p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/eleqtronika/foto-video/fotoaparatebi/instax-mini-11-charcoal-grey-fotoaparati-119466" target="_blank" class="sex-box__btn result-single"> <p class="sex-box__btn__p">აჩუქე</p> </a> <a href="https://extra.ge/catalog/eleqtronika/foto-video/fotoaparatebi" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">განაგრძე შოპინგი</p> </a></div>'},
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">ფიტნეს სმარტ საათი</p><a href="https://extra.ge/detailed/eleqtronika/telefonebi-da-aqsesuarebi/smart-saatebi-da-aqsesuarebi/smart-saati/mi-smart-band-5-fitnes-saati-127517" target="_blank" ></p> <div class="img-text"><img src="image/smart.png"/> <p>როგორც ჩანს, ჯანსაღი ცხოვრების აქტიური მიმდევარი ხარ. Xiaomi-ს ფიტნეს სმარტ საათი დაგეხმარება ყოველდღიურად აკონტროლო შენი ფიზიკური აქტივობის შედეგები. გადაიხადე Mastercard-ით და მიიღე დამატებით 20% + უფასო მიწოდება, სადაც გაგიხარდება!</p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/eleqtronika/telefonebi-da-aqsesuarebi/smart-saatebi-da-aqsesuarebi/smart-saati/mi-smart-band-5-fitnes-saati-127517" target="_blank" class="sex-box__btn result-single"> <p class="sex-box__btn__p">აჩუქე</p> </a> <a href="https://extra.ge/catalog/eleqtronika/telefonebi-da-aqsesuarebi/smart-saatebi-da-aqsesuarebi/smart-saati" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">განაგრძე შოპინგი</p> </a></div>'},
  
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">ზურგჩანთა</p><a href="https://extra.ge/detailed/superdrai/modis-samqaro/mamakatsi/aqsesuarebi/mamakatsis-chanta/zurgchanta-78319" target="_blank" ></p> <div class="img-text"><img src="image/bag.png"/> <p>სავარაუდოდ, სიახლეების მოყვარული ხარ და შესაძლოა ბუნებაც გიყვარდეს. ახალი ზურგჩანთა გაგიწევს მეგზურობას ნებისმიერ სიტუაციაში და შენი მოგონებების განუყოფელი ნაწილი გახდება. შეიძინე Mastercard-ით და მიიღე დამატებით -20% ფასდაკლება + უფასო მიწოდება სასურველ მისამართზე</p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/superdrai/modis-samqaro/mamakatsi/aqsesuarebi/mamakatsis-chanta/zurgchanta-78319" target="_blank" class="sex-box__btn result-single"> <p class="sex-box__btn__p">აჩუქე</p> </a> <a href="https://extra.ge/search/%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90?type=2&current=1&sortType=1&sortBy=2" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">განაგრძე შოპინგი</p> </a></div>'},
  
    {   title: '<p class="product-name-title">ჩვენი აზრით შენს 💜-ს გაუხარდება</p>',
        desc: '<p class="product-name">200 ლარიანი სასაჩუქრე ვაუჩერი</p><a href="https://extra.ge/detailed/sasachuqre-baratebi/vaucherebi/extra---sasachuqre-barati-157028" target="_blank" ></p> <div class="img-text"><img src="image/sasachuqre200.png"/> <p>ამბობენ, ქალების სურვილები ძნელად ამოსაცნობია. შენი მეუღლის შემთხვევაში ეს ასე შეიძლება არ იყოს, თუმცა არჩევანის გამარტივებისთვის შეგიძლია მას სასაჩუქრე ვაუჩერი აჩუქო. </p></div> </a> <div class="result-button-box"><a href="https://extra.ge/detailed/sasachuqre-baratebi/vaucherebi/extra---sasachuqre-barati-157028" target="_blank" class="sex-box__btn result-single"> <p class="sex-box__btn__p">აჩუქე</p> </a> <a href="https://extra.ge/catalog/sasachuqre-baratebi/vaucherebi" target="_blank" class="sex-box__btn result-button-box__second-btn"> <p class="sex-box__btn__p">განაგრძე შოპინგი</p> </a></div>'},
    
    
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