const express = require("express");
const router = express.Router();
const {createDoctor , showDoctor} =  require("../controller/doctorcontrollers")

router.get("/",(req,res)=>{
  res.render("createdoc")
});

router.post("/data",createDoctor);
router.get("/show",showDoctor);

module.exports= router;