$(document).ready(function(){
    setinterval(function(){
        var slideWidth = $('.slide').outerWidth();
        $('#slideTrack').animate({
            scrollLeft: '+=' + slideWidth
        },600, function(){
            $('#slideTrack').append($('.slide').first());
            $('#slideTrack').scrollLeft(0);
        });
    }, 1500);
});