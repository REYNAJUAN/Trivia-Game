$(document).ready(function(){
document.write("");

(function(){
    var question=[{
        questionOne:"What newspaper does Superman works for?",
        choices:[
            'Los Angeles Times', 'The Daily Planet', 'The Argonaut',
        ],
        //answer: the daily planet//
        correctAnswer:1
    },


    {
        questionTwo:"What is the third movement of a symphony called?",
        choices:[
            'Minuet', 'Adagio', 'Allegro',
        ],
        //answer: minuet//
        correctAnswer:0
    },
    {
        questionThree:"What year marked the first apperance of Pinochio?",
        choices:[
            '1975', '1810', '1883',
        ],
        //answer: 1883//
        correctAnswer:2
    }];
    
    document.ready("");
//question counter//
var questionCounter=0;
var choices=["0", "1","2"];
var text = "";

//for loop//
var i;
for (i = 0; i < choices.length; i++) {
    text += choices[i];
}
 
var answerOne=0;
    answerOne="The Daily Planet";
    function answer(){$("0").answer = "Correct" +answerOne;

var answerTwo=0;
    answerTwo="Minuet";
    function answer(){$("0").answer = "Correct" +answerTwo;

var answerThree=2;
    answerThree="1883";
    function answer(){$("2").answer = "Correct" +answerThree;

};
}
}
}
)
})
