const Cart = require("../models/cartModel");



const userCart = async(req,res)=>{


    try {
        userId = req.params.userId;
        let cartData = await Cart.findOne({userId:userId}).populate("items.productId")
        // .populate('userId');
        console.log("usercart ",cartData);
        if(!cartData){
            return res.send("cart does not found");
        }
        res.json(cartData);
        
    } catch (error) {
        console.log("err>>",error)
        res.send(error);
        
    }
};


const addCartProduct = async(req,res)=>{

    const userId = req.params.userId;
    const {productId,quantity} = req.body;
    try {
        let cart = await Cart.findOne({userId});
        if(!cart){
            cart = new Cart({userId, items:[]});
        }
        const existingItem = cart.items.find((item)=>
        item.productId.equals(productId));
        // console.log("tisis ",existingItem)

        if(existingItem){
            existingItem.quantity += quantity || 1;

        }else{
            cart.items.push({productId,quantity:quantity || 1});
        }
        await cart.save();
        res.json(cart);

        
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
        
    }
};
// try {
//     const userId = req.params.userId;
// const data = req.body;
// let cart = await Cart.find({userId:userId});
// let existingCart;
// if(cart.length <=0){
//     existingCart = new Cart({items:[],userId:userId});
// return res.send("error");
// }
// // console.log("this is existing",existingCart);
// if(cart.length > 0){
//     console.log("my value",cart)
//   let product =   cart[0].items.find(
//     (itemObj)=>itemObj.productId == data.productId);
//   product.quantity += data.quantity;

//   cart[0].items.push(product);
//  let newData =  await cart[0].save();

//  return  res.json(newData);
// };

// let newProduct = {productId: data.productId,quantity:data.quantity}
    
// existingCart.items.push(newProduct);
// let newCart = await existingCart.save()
// res.send(newCart);
    
// } catch (error) {
//    res.send({error:"Internal server error"}) 
// }





const removeItemFromCart = async(req,res)=>{
    try {
        const {userId, productId} = req.params;
        const cart = await Cart.findOne({userId});
        if(!cart){
            return res.send("Cart does not found ");
        }
        console.log(cart);
        let result = cart.items.filter((eachProduct)=> eachProduct.productId != productId);
console.log("hii",result);
        cart.items = result;
       
        await cart.save();
        res.json(cart); 
    } catch (error) {
        res.send(error.message);
        
    }
};




const updateCartItem = async(req,res)=>{
    const {userId,productId} = req.params;
    const {quantityToRemove} = req.body;

  try {
    const cart = await Cart.findOne({userId});
    if(!cart){
        return res.status(404).json({error:"Cart not found  "});
    }
    
    const cartItem  = cart.items.find((item)=>item.productId.equals(productId));

    if(!cartItem){
        return res.status(404).json({eror:"Item not found in the cart"});
    }
//Decrement the quantity or remove the item if quantityToRemove is greater or equal to the current quantity 
    if(quantityToRemove && quantityToRemove<cartItem.quantity){
cartItem.quantity -= quantityToRemove;
    }else{
cart.items = cart.items.filter((item)=> !item.productId.equals(productId));

    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.send("Internal server error")
    
  }
}


module.exports ={userCart,addCartProduct,removeItemFromCart,updateCartItem} ;