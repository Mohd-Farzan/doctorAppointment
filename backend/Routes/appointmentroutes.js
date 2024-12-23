const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
  res.send("appoin");
});

module.exports= router;