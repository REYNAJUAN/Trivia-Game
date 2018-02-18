document.write("");
document.ready("");

(function(){
    var question=[{
        question:"What newspaper does Superman works for?",
        choices:[
            'Los Angeles Times', 'The Daily Planet', 'The Argonaut',
        ],
        //answer: the daily planet//
        correctAnswer:1
    },


    {
        question:"What is the third movement of a symphony called?",
        choices:[
            'Minuet', 'Adagio', 'Allegro',
        ],
        //answer: minuet//
        correctAnswer:0
    },
    {
        question:"What year marked the first apperance of Pinochio?",
        choices:[
            '1975', '1810', '1883',
        ],
        //answer: 1883//
        correctAnswer:2
    }];

//question counter//
var questionCounter=0;
var choices=["0", "1","2"];
var text = "";

//for loop//
var i;
for (i = 0; i < choices.length; i++) {
    text += choices[i];
}
document.getElementById("text").innerHTML = text;








    

    })

