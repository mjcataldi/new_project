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


    var drawingSurface = document.getElementById("myCanvas");
    var context = drawingSurface.getContext("2d");

    context.lineWidth = 5;
    context.strokeStyle = '#0f0';
    context.lineCap = "round";

    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(225, 350);
    context.lineTo(300, 10);
    context.lineTo(400, 350);
    context.stroke();

});