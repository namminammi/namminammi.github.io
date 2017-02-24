
// Test for client type //
// 1)The client type is normal and returns 0 rebate
describe('show client type: normal', function(){
    it('should show client type : normal', function(){
        var userType = 0;
        var expected = 0;
        var actual = userTypeRebate(userType);
        expect(expected).to.equal(actual);

    });
});

// 2) The client type is company and returns -5 rebate
describe('show client type: company', function(){
    it('should show client type : company', function(){
        var userType = 1;
        var expected = -5;
        var actual = userTypeRebate(userType);
        expect(expected).to.equal(actual);

    });
});

// Test for product type //
// 1) The product type is new and returns 25 price
describe('show product type: new', function(){
    it('should show product type : new', function(){
        var productType = 0;
        var expected = 25;
        var actual = productTypePrice(productType);
        expect(expected).to.equal(actual);

    });
});

// 2) The product type is old and returns 35 price
describe('show product type: old', function(){
    it('should show product type : old', function(){
        var productType = 1;
        var expected = 35;
        var actual = productTypePrice(productType);
        expect(expected).to.equal(actual);

    });
});

// Test for rebate based on publish date //
// 1) -10 Rebate for product published today: 
describe('show rebate amount based on publish date: today', function(){
    it('should show product type : today', function(){
        var publishedDate = new Date();
        var expected = -10;
        var actual = todayRebate(publishedDate);
        expect(expected).to.equal(actual);

    });
});

// 2) No rebate for products not published today
describe('show rebate amount based on publish date: not today', function(){
    it('should show product type : not today', function(){
        var publishedDate = new Date("Wed Feb 08 2016 14:50:32 GMT-0500 (EST)");
        var expected = 0;
        var actual = todayRebate(publishedDate);
        expect(expected).to.equal(actual);

    });
});



// Tests for total price //
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
