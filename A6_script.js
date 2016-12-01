// use zoomooz.js to zoom into About Me
// zoomooz.js can transition to next item while staying zoomed
// other animations for individual objects

function enterValue() {
    console.log("Value entered!")
    var value = $(':input').val();
    console.log("Value set");

    hideTask();
    console.log("Task hidden");

    if ($(':input').val() == 0.05) { ######neeed number not text??
        console.log("fail to reject the null");
    }
};


function hideTask() {
    $('#input').remove();
    $('#gameInst').remove();
};

function showHooray() {

};

function showBoo() {

};