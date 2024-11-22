/** 
 * This fuction calculate total price of a new order
*@param {array} priducts  cartProduct: Array of objects
*@returns {number} Total price  cartProduct: Array of objects
**/
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price);
    return sum
}