const  mongoose  = require("mongoose")


const {Schema} = mongoose;

const ProductSchema = new Schema({
    name: {type:String,required:true},
    description: {type: String, required:true},
    price: {type: Number, required:true},

    stock: {type: Number, required:true},
    imageUrl: {type: String},
     userId: {type: mongoose.Schema.Types.ObjectId,  ref:  "User", required:true},
   category:{type:String,required:true},
   attributes:[{name:String, value: String}]


});

const ProductModel = mongoose.model("Product",ProductSchema);


module.exports = ProductModel;



