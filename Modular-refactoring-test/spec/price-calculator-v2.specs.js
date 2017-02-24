
//##### Tests for total price #####//
describe('price calculator : normal user + new product + published today', function() {
    it('should calc price right', function() {
        var userType = 0;
        var productType = 0;
        var price = 100;
        var publishedDate = new Date();

        var expected = 115;
        var actual = calculatePrice(userType, productType, price, publishedDate);
        expect(expected).to.equal(actual);
    });
});

describe('price calculator : normal user + new product + not published today', function() {
    it('should calc price right', function() {
        var userType = 0;
        var productType = 0;
        var price = 100;
        var publishedDate = new Date("Tue Feb 07 2016 00:13:02 GMT-0500 (EST)");

        var expected = 125;
        var actual = calculatePrice(userType, productType, price, publishedDate);
        expect(expected).to.equal(actual);
    });
});


describe('price calculator : normal user + old product', function() {
    it('should calc price right', function() {
        var userType = 0;
        var productType = 1;
        var price = 100;
        var publishedDate = new Date("Tue Feb 07 2016 00:13:02 GMT-0500 (EST)");

        var expected = 135;
        var actual = calculatePrice(userType, productType, price, publishedDate);
        expect(expected).to.equal(actual);
    });
});

describe('price calculator : company user + new product + published today', function() {
    it('should calc price right', function() {
        var userType = 1;
        var productType = 0;
        var price = 100;
        var publishedDate = new Date();

        var expected = 110;
        var actual = calculatePrice(userType, productType, price, publishedDate);
        expect(expected).to.equal(actual);
    });
});

describe('price calculator : company user + new product + not published today', function() {
    it('should calc price right', function() {
        var userType = 1;
        var productType = 0;
        var price = 100;
        var publishedDate = new Date("Tue Feb 07 2016 00:13:02 GMT-0500 (EST)");

        var expected = 120;
        var actual = calculatePrice(userType, productType, price, publishedDate);
        expect(expected).to.equal(actual);
    });
});


describe('price calculator : normal user + old product', function() {
    it('should calc price right', function() {
        var userType = 1;
        var productType = 1;
        var price = 100;
        var publishedDate = new Date("Tue Feb 07 2016 00:13:02 GMT-0500 (EST)");

        var expected = 130;
        var actual = calculatePrice(userType, productType, price, publishedDate);
        expect(expected).to.equal(actual);
    });
});
