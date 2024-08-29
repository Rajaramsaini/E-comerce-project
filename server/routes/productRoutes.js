const express = require("express");
const router = express.Router();
const ProductModel = require("../models/productModel");
const Route = require("express/lib/router/route");
const { getProducts, updateProduct, addProduct, deleteProduct, getProductById, getProductBySellerId } = require("../controllers/productController");
const authCheck = require("../middlewares/auth");
const roleGuard = require("../middlewares/roleGuard");
const upload = require("../middlewares/upload");

router.get("/seller",authCheck,getProductBySellerId);

router.get("/",getProducts);

router.post("/",authCheck, upload.single("image"),addProduct)

router.get("/:productId",getProductById);



router.put("/:productId",authCheck, updateProduct);



router.delete("/:productId",deleteProduct);





module.exports = router;