$(document).ready(function() {

        $('#moreBtn').on('click', function(event) {
            $('#page1, #moreBtn').css('display', 'none');
            $('#upDownBtn').css('display', 'block');
        });

        $('.arrowUpBtn').on('click', function(event) {
            $('#page1, #moreBtn').css('display', 'block');
            $('#upDownBtn').css('display', 'none');
        });

        $('.arrowDownBtn').on('click', function(event) {
            $('#page2, #upDownBtn, .gradient-bottom').css('display', 'none');
            $('#lastPageUpBtn, .gradient-top').css('display', 'block');
        });

        $('#lastPageUpBtn').on('click', function(event) {
            $('#page2, #upDownBtn, .gradient-bottom').css('display', 'block');
            $('#lastPageUpBtn, .gradient-top').css('display', 'none');

        });

    });