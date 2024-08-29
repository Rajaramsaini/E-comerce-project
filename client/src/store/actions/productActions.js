


export const ProductActionsKeys = {
    SET_PRODUCT:"SET_PROUCT",
 REMOVE_FROM_CART: "REMOVE_FROM_CART ",
INCREASE_QUANTITY:"ICREASE_QUANTITY",
DECREASE_QUANTITY:"DECREASE_QUANTITY",
};

export const setProduct =(products)=>({
    type : ProductActionsKeys.SET_PRODUCT,
    payload:products,
});





export const removeFromCart = (productId)=>({
    type: ProductActionsKeys.REMOVE_FROM_CART,
    payload:productId,
});


export const decreaseQuantity = (productId)=>({
    type : ProductActionsKeys.DECREASE_QUANTITY,
    payload:productId,
});

export const increaseQuantity = (productId)=>({
    type: ProductActionsKeys.INCREASE_QUANTITY,
    payload: productId,
});