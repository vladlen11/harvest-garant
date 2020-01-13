$(function(){

    var interval = setInterval(increment,100);
    var current = 0;

    function increment(){
        current++;
        $('#counter').html(current+'%');
        //if(current == 100) { current = 0; }
    }

    $('.load-bar').mouseover(function(){
        clearInterval(interval);
    }).mouseout(function(){
        interval = setInterval(increment,100);
    });


});