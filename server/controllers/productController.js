   const { json } = require("body-parser");
const ProductModel = require("../models/productModel");
const { JsonWebTokenError } = require("jsonwebtoken");






   const getProducts = async (req,res) => {
    try {

  const products  = await ProductModel.find();
     res.status(200).json(products);        
    } catch (error) {
        res.status(404).send(error.message);
        
    }
    // console.log(error.message)


};





const addProduct = async(req,res)=>{
    try {
      console.log("thie ",req.body);
      let data = req.body.data;

      //  let data = JSON.parse(req.body.data);

      // let newProductObj = {...data, imageUrl:req.file.filename,userId:req.userId}

      let newProductObj = {...data,userId:req.userId}

          const newProducts = await ProductModel.create(newProductObj);
      res.status(200).json({data:newProducts, message:"Product added successfully "}); 
 
    } catch (error) {
      console.log("error",error)
     res.status(404).send("internal server error")   
    }

};


const getProductBySellerId=async(req,res)=>{
try {
  console.log(req.params);
const sellerId = req.userId;

 let allSellerProduct = await ProductModel.find({userId:sellerId})
  res.status(200).json(allSellerProduct);
  
} catch (error) {
  res.status(404).json({message: "Inetrnal server error"})
  
}
};

const getProductById =async (req,res)=>{
  try {
    const product = await ProductModel.findById(req.params.productId);
if(!product){
  return res.status(404).json({error:"Product not found"});
}
res.status(200).json(product);

    
  } catch (error) {
    console.log(error);
    res.send(500).json({eror:"Internal server error"});
    
  }
};

const updateProduct = async (req,res)=>{
  try {
    const productId = req.params.productId;

  let newproduct = req.body;
    console.log("===>sdfsdfsdf>",newproduct,productId);
      const updateProduct = await ProductModel.findByIdAndUpdate(productId,newproduct,{new:true});
  if(!productId){
    return  res.status(404).send({message:"Product not found"});
  }
    console.log("===>sdfsdfsdf>",updateProduct);

    res.status(200).send({ data: updateProduct, message:"Updated Successfullt" }) ;
  } catch (error) {
   res.status(404).json({error:"internal server error"}) 
  }  
  

};



const deleteProduct = async(req,res)=>{
  try {

    const productId = req.params.productId;
 let product = await ProductModel.findByIdAndDelete(productId);
if(! product){
  res.send("please provide correct Id");
  return;
};
    res.json(product)
    
  } catch (error) {
    console.log("Error",error);
    res.status(404).send("internal server error ")
  }
}

module.exports ={ getProducts, addProduct,getProductById,updateProduct,deleteProduct,getProductBySellerId};