const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");




const getAllUser = (req,res)=>{
    res.send("userData");

};



const addUser = async (req,res)=> {
    try { 
        const  userData = req.body;

        // console.log("userData",userData)
        const saltRound = 10 ;
        let hashPassword = await  bcrypt.hash(userData.password, saltRound);
        let newUser = new UserModel({
            ...userData,
            password:hashPassword,
        });
        await newUser.save();

    let massageData = {
        massage: "User added soccessfully",
        status: 200,
        data: newUser,
    };
    res.status(200).send(massageData);

        
    } catch (error) {
        let massageData = {
            massage: error.massage,
            status: 404,
            data : error,
        };
        res.status(404).send(massageData);
        
    }
};


const loginUser = async (req,res)=>{
    try {
        let userLoginData = req.body;

        let userData = await UserModel.findOne({email:userLoginData.email});
        if(userData)
        //check password
        {
            let isPasswordCorrect = await bcrypt.compare(
                userLoginData.password,
                userData.password
            );
            if(isPasswordCorrect){
                //assign   token 
                let token = jwt.sign({
                    _id: userData._id,
                    role:userData.role,
                },
                "secret",{expiresIn: 60 * 60});
                let massageData = {
                    massage:"User Logged in successfully",
                    status:200,
                    data: {token},
                };
                res.status(200).send(massageData);
                
            }  else {
                //send from here
                res.send("Invalid Credentials");
            }
         } else {
                res.send("Userdoes not exist");

        }
        
    } catch (error) {
        let massageData = {
            massage:error.massage,
            status:404,
            data: error,
        };
        res.status(404).send(massageData);

        
    }
};

module.exports ={getAllUser, addUser,loginUser};