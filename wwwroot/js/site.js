// Write your JavaScript code.
$(function(){
    // var video = document.getElementById("myVideo");

    // $("#play").on("click", function() {
    //     video.play();
    // });

    // $("#pause").on("click", function() {
    //     video.pause();
    // });

    // $("backwards").on("click", function() {
    //     video.currentTime -= 15;
    // });


    // var drawingSurface = document.getElementById("myCanvas");
    // var context = drawingSurface.getContext("2d");


    // // Circle
    // context.beginPath();
    // context.moveTo(10, 10);
    // context.lineTo(225, 350);
    // context.lineTo(300, 10);
    // context.lineTo(400, 350);
    // context.stroke();

    // // Smiley Face!
    // context.beginPath();
    // context.arc(100, 150, 75, 1 * Math.PI, 2 * Math.PI, true);
    // context.lineWidth = 25;
    // context.strokeStyle = 'red';
    // context.lineCap = "round";
    // context.stroke();
    
    // context.beginPath();
    // context.arc(50, 100, 5, 0, 2 * Math.PI, true);
    // context.lineWidth = 25;
    // context.strokeStyle = 'red';
    // context.lineCap = "round";
    // context.stroke();

    // context.beginPath();
    // context.arc(150, 100, 5, 0, 2 * Math.PI, true);
    // context.lineWidth = 25;
    // context.strokeStyle = 'red';
    // context.lineCap = "round";
    // context.stroke();

    var myCanvas = document.getElementById("myCanvas");
    var context = myCanvas.getContext("2d");

    context.beginPath();
    context.moveTo(10, 380);
    context.quadraticCurveTo(300, -250, 580, 380);
    context.lineWidth = 25;
    context.strokeStyle = "orange";
    context.lineCap = "round";
    context.stroke();
});