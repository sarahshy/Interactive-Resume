// use zoomooz.js to zoom into About Me
// zoomooz.js can transition to next item while staying zoomed
// other animations for individual objects

// $('#images').hover(function() {
//     console.log("hovering!");
//     $('#hobbies').css({"height": "40px", "width": "40px", "border-radius": "20px", "margin": "25px", "-webkit-transition": "all 0.3s ease-out", "-moz-transition": "all 0.3s ease-out", "-ms-transition": "all 0.3s ease-out", "-o-transition": "all 0.3s ease-out", "transition": "all 0.3s ease-out"});

// }, function() {
//         console.log("unhovering!");
//         $('#hobbies').css({"height": "90px", "width": "90px", "border-radius": "45px", "-webkit-transition": "all 0.3s ease-out", "-moz-transition": "all 0.3s ease-out", "-ms-transition": "all 0.3s ease-out", "-o-transition": "all 0.3s ease-out", "transition": "all 0.3s ease-out"});
//     }

// );

//Setting up data for pie chart

var languageData = {
    labels : ["English", "Hebrew", "German"],
    datasets : [
        {
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            data : [63, 25, 12],
            label: ["English", "Hebrew", "German"],
            backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56"]
        }
        ]
}
var languages = document.getElementById('languages').getContext('2d');
new Chart(languages , {
    type: "pie",
    data: languageData,
    options: {legend: {
            display: false
         }
     }
});


var cvs = document.getElementById('cvs');
cvs.width = 30;
cvs.height = 25;


function enterValue() {
    console.log("Value entered!")
    var value = $(':input').val();
    console.log("Value set");
    $('#gameInst').fadeOut();
    $('#falseMessage').fadeOut();

    if ((value >= 0) && (value <= 1)) {
        if (value > 0.05) {
            console.log("fail to reject the null");
            console.log(value);
            $('#contactme').css("background-color", "#8C9F9E")
            showHooray();
        }

        else {
            console.log("reject the null");
            console.log(value);
            $('#contactme').css("background-color", "#8C9F9E")
            showBoo();
        }

        hideTask();
        console.log("Task hidden");
        showHypotheses();
        $('#contTitle').fadeOut();
    }

    else {
        $(':input').val("");
        showFalseMessage();
    }
};


function hideTask() {
    $('#input').fadeOut();
    $('#gameInst').fadeOut();
};

function showHooray() {
    var value = $(':input').val();
    $('#hooray1').fadeIn();
    $('#hooray2').fadeIn();
    $('.insertValue').text(value);

};

function showBoo() {
    var value = $(':input').val();
    $('#boo').fadeIn();
    $('.insertValue').text(value);
};

function showHypotheses() {
    $('#hypotheses').fadeIn();
}

function showFalseMessage() {
    $('#falseMessage').fadeIn();
    $('#contactme').css("background-color", "red")
};


