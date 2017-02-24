/**
### Price Calculator ###
Calculation of final price:
1) Type of client (normal= 0, company = 1) : whichClient
2) Type of product (new = 0, old = 1) : isNewProduct
3) Type of published date (today or else) : isPublishedToday

Total price = basePrice + whichClient + isNewProduct + isPublishedToday
*/

//Function to verify userType 
function whichClient(userType) {
    //0 = normal 
    if (userType == 0) {
        return 0;
    } else {
        // 1 = company
        return -5;
    }
};

//Function to verify new and old product
function isNewProduct(productType) {
    //0 = new product
    if (productType == 0) {
        // Add 25 when it's new product
        return 25;
    } else {
        // 1= old product
        // Add 35 when it's old product
        return 35;
    }
};

//Function to verify if the product was published today or not
function publishedToday(publishedDate) {
    if (publishedDate.toDateString() === new Date().toDateString()) {
        //-10 in rebate when product is published today
        return -10;
    } else {
        //otherwise, no rebate
        return 0;
    }
};

//Total Price is calculated
function calculatePrice(userType, productType, price, publishedDate) {
    try {
        var price = 100;
        return whichClient(userType) + isNewProduct(productType) + price + publishedToday(publishedDate);
    } catch (ex) {
        console.log(ex);
    }
    return 0;
}
