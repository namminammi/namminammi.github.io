//#########
// My comments will start and end like this block with //#########
//#########
/**
### Price Calculator ###
Calculation of final price:
1) Type of client (normal= 0, company = 1) : whichClient
2) Type of product (new = 0, old = 1) : isNewProduct
3) Type of published date (today or else) : istodayRebate

Total price = basePrice + whichClient + isNewProduct + istodayRebate
//#########
// I find Total price formula above a bit confusing. 
// basePrice is ok
// whichClient suggest something other than number. How can that be added?
// isNewProduct suggest boolean (true/false or 0/1) because that is usuall naming convention with isSomething names
// istodayRebate also suggest boolean because of naming. How to add boolean to price which is number?
// So how could I add "number" + "something" + "boolean" + "boolean"


// From task we could conclude that formula should be:
// totalPrice = basePrice + productTypePrice - rebate
// basePrice is number
// productTypePrice is number also based on the fact that product is new or old
// and rebat is number calculated from few variables



//#########
*/

//Function to verify userType 
//#########
// By looking I can see that this function is actually "userTypeRebate", because
// it returns rebat (number) based on user type
// Which is fine, but there is no comment saying that. Existing comment doesn't clarify and better would be:
// Returns rebat amount (number) based on user type
// No tests for this function?
//#########
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
//#######
// Again name is counfusing (expecting boolean) and comment doesn't explain, better would be
// Returns product price (number) based on type of product (new/old)
// And name should be maybe productTypePrice
// No tests for this function?
//#######
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
//#######
// This time comment is counfusing (expecting boolean), better would be
// Returns rebat abount (number) based on published date (today/not today)
// No tests for this function?
//#######
function todayRebate(publishedDate) {
    if (publishedDate.toDateString() === new Date().toDateString()) {
        //-10 in rebate when product is published today
        return -10;
    } else {
        //otherwise, no rebate
        return 0;
    }
};

//Total Price is calculated
//#######
// Variable price is declared again with hardcoded value of 100? We are getting that as param, but
// I guess it is leftover by mistake.
// Why did you left try/catch part? Do you write code like that always? Or did you just left it because it was there?
// Maybe a comment explaining what it does
// Returns price (number) based on product type and applied rebate
//#######
function calculatePrice(userType, productType, price, publishedDate) {
    try {
        var price = 100;
        return whichClient(userType) + isNewProduct(productType) + price + todayRebate(publishedDate);
    } catch (ex) {
        console.log(ex);
    }
    return 0;
}

//#########
// When you decide to write more smaller functions, than there should also be tests for all or most of
// those smaller functions because smaller functions are easy to test.
// Naming is important because it helps us understand the code easier.
// Good comments also should explain:
// What does that function returns?
// What parameters and of what type does it accepts (optionaly or required)?
// Format itself is than not that important, but JSDocs would suggest this
/**
 * Returns price based on product type with applied rebat
 * @param  {number} price - produt price
 * @param  {Boolean} isProductNew
 * @param  {string} userType - can be normal, company or subscriber
 * @param  {Object} publishedDate - date object
 * @return {number}
 */
 function calculatePrice(userType, productType, price, publishedDate) {
  return 3000;
 }
//#########
