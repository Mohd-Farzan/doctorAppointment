const bcrypt=require('bcrypt')
const signupModel=require('../../Model/signupModel');
const loginModel = require('../../Model/loginModel');
// const jwt=require('jsonwebtoken')

const signupUser = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        const userExist = await signupModel.findOne({email});
        if (userExist) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        const saltRounds = 10;
        const hash_password = await bcrypt.hash(password, saltRounds);
        const newUser = new signupModel({
            userName,
            email,
            password: hash_password,
        });

        await newUser.save();
        res.status(200).json({
            success: true,
            message: 'User account created successfully',
            user: newUser,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
const loginUSer= async (req,res)=>{
    const {email}=req.body;
    const checkUser= await loginModel.findOne({email})
    if(checkUser){
        res.status(200).json({
            success:true,
            message:"successfully logged in"
        })
    }
    try {
        
    } catch (error) {
        console.log(error)
    }
}
const AuthMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized user'
        });
    }

    try {
        const decoded = jwt.verify(token, 'CLIENT_SECRET_KEY');
        req.user = decoded;

        // If you want to send a response back with user info:
        res.status(200).json({
            success: true,
            user: decoded
        });
        // If this is a middleware that protects routes and doesn't send a response:
        // next(); // uncomment if needed for protected routes
    } catch (error) {
        console.error(error.stack);
        res.status(401).json({
            success: false,
            message: 'Unauthorized user!'
        });
    }
};
module.exports={signupUser,loginUSer,AuthMiddleware}