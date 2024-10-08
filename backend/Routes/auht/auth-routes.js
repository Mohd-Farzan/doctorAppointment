const express=require('express');
const { signupUser,loginUSer,AuthMiddleware} = require('../../Controlller/auth/auth-controller');
const router=express.Router();
router.post('/signup',signupUser);
router.post('/login',loginUSer);
router.get('/checkroute', AuthMiddleware, (req, res) => {
    res.json({ success: true, user: { id: res?._id, name: req?.userName} });
  });
module.exports=router