   
    var dvDenmark = document.getElementById('dvDenmark');
    var dvSweden = document.getElementById('dvSweden');
    var dvNorway = document.getElementById('dvNorway');
    var dvFinland = document.getElementById('dvFinland');
    var dvIceland = document.getElementById('dvIceland');
    var dvFaroe = document.getElementById('dvFaroe');


    angular.element(document).ready(function() {
        angular.bootstrap(dvDenmark, ['denmarkApp']);
        angular.bootstrap(dvSweden, ['swedenApp']);
        angular.bootstrap(dvNorway, ['norwayApp']);
        angular.bootstrap(dvFinland, ['finlandApp']);
        angular.bootstrap(dvIceland, ['icelandApp']);
        angular.bootstrap(dvFaroe, ['faroeApp']);

    });