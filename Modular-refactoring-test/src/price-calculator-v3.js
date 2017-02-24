/**
* ### Price Calculator ###

* Returns amount of total price by summing up all elements :
* Total price = price + userTypeRebate + productTypePrice + todayRebate 
* @param  {string} price : base price to start calculation with
* @return {number} 
* @param  {string} userType : can be normal(0) or company(1)
* @return {number}
* @param  {string} productType : can be new(0) or old(1)
* @return {number}
* @param  {string} todayRebate : rebate based on publish date, can be today or not today
* @return {number}
*/


/**
 * Returns amount of rebate based on user type (normal/company) 
 * @param  {string} userType : can be normal or company
 * @return {number}
 */
function userTypeRebate(userType) {
        // 0 = normal user, no rebate
    if (userType == 0) {
        return 0;
    } else {
        // 1 = company user gets -5 in rebate
        return -5;
    }
};

/**
 * Returns amount of price based on product type (new/old)
 * @param  {string} productType : can be new or old
 * @return {number}
 */
function productTypePrice(productType) {
    if (productType == 0) {
        //0 = new product
        // Adds 25 when it's new product
        return 25;
    } else {
        // 1= old product
        // Adds 35 when it's old product
        return 35;
    }
};

/**
 * Returns amount of rebate based on published date (today/not today)
 * @param  {string} productType : today or not today
 * @return {number}
 */
function todayRebate(publishedDate) {
    if (publishedDate.toDateString() === new Date().toDateString()) {
        //-10 in rebate when product is published today
        return -10;
    } else {
        //otherwise, no rebate
        return 0;
    }
};


/**
 * Returns amount of total price by summing up all elements :
 * Total price = price + userTypeRebate + productTypePrice + todayRebate 
 * @param  {number} price : product price
 * @param  {string} userType : can be normal or company
 * @return {number}
 * @param  {string} productType : can be new or old
 * @return {number}
 * @param  {string} productType : today or not today
 * @return {number}
 */
function calculatePrice(userType, productType, price, publishedDate) {
    return userTypeRebate(userType) + productTypePrice(productType) + price + todayRebate(publishedDate);
}
