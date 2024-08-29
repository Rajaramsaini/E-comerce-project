const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes")
const productRoute = require("./productRoutes")
 const cartRoute = require("./cartRoutes")





router.use("/user",userRoutes);
router.use("/product",productRoute);
router.use("/cart",cartRoute);

 module.exports = router;
