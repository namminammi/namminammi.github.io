// Scrolling function
$(document).ready(function(){

 $('#nav li a').on('click', function(e) { 
  var el = $( e.target.getAttribute('href') );
  var elOffset = el.offset().top;
  var elHeight = el.height();
  var windowHeight = $(window).height();
  var offset;

  if (elHeight < windowHeight) {
    offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
  }
  else {
    offset = elOffset;
  }
  var speed = 900;
  $('html, body').animate({scrollTop:offset}, speed);
});

});