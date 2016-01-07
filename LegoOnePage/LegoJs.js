$(document).ready(function() {
    $('#nav li a').on('click', function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("id");
        scrollToID('#slide' + sectionID, 750);
    });

});


function scrollToID(id, speed) {
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({
        scrollTop: targetOffset
    }, speed);
}
