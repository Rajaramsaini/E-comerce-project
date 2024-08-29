 const jwt = require("jsonwebtoken");



 const authCheck =async (req, res,next)=>{
    try {
        let token = req.headers.authorization;

        console.log("The data ",token)

        if(!token){
          res.send("Please provide token ")  
        }


        let result =  await jwt.decode(token,"secret")
       console.log(result);
  
  
       req.userId = result._id;
       req.userRole = result.role;
       console.log(token);
  
       
  
       next();
   }
  
        
catch (error) {
        
res.send(error.message);
    }
     
 }
 module.exports = authCheck ;