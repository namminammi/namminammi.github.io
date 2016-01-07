$(document).ready(function() {
    $('#nav li a').on('click', function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("id");
        scrollToID('#slide' + sectionID, 900);
    });

});


function scrollToID(id, speed) {
    var offSet = 50;
    var speed= 950;
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({
        scrollTop: targetOffset
    }, speed);
}
