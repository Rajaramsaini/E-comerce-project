const exprees = require("express");
//const router = require(".");
const { userCart, addCartProduct, removeItemFromCart, updateCartItem } = require("../controllers/cartController");

 const router = exprees.Router();




router.get("/user/:userId",userCart);

router.post("/user/:userId", addCartProduct);

router.delete("/remove/:userId/:productId",removeItemFromCart);



router.patch("/remove/:userId/:productId",updateCartItem);


module.exports = router ;

