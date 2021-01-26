"use strict";

window.onload = function() {

    var quiz = {
        title: 'What superhero are you?',

        questions: [{
                text: "How would you describe your personality?",
                responses: [{
                        text: 'Batman',
                        value: 'Batman'
                    },
                    {
                        text: '<p>Here, have an Archer</p><img src="https://i.imgur.com/dipkE0v.jpg"/>',
                        value: 'Superman'
                    },
                    {
                        text: 'Fun and easy going',
                        value: 'The Flash'
                    }
                ]
            },
          
            {
                text: "When do you help people?",
                responses: [{
                        text: 'Every chance I can',
                        value: 'The Flash'
                    },
                    {
                        text: 'Batman',
                        value: 'Batman'
                    },
                    {
                        text: '<p>Here, have an Archer</p><img src="https://i.imgur.com/dipkE0v.jpg"/>',
                        value: 'Superman'
                        
                    }
                ]
            },
        ]
    };


    var app = new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array()
        },
        methods: {
            // Go to next question
            next: function() {
                this.questionIndex++;
                console.log(this.userResponses);
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                //find the highest occurence in responses
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            }
        }
    });
}
