const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Dashboard");

mongoose.connection.on("connected",()=>{
    console.log("database connected successfully.....");
    
});
mongoose.connection.off("error",()=>{
    console.log("database connection error");
    
});



module.exports=mongoose;