const mongoose = require("mongoose");
const appointmentSchema =  mongoose.Schema({

    Patient :{
        type:String,

    },
    Doctor :{
        type:mongoose.Schema.TypesObjectId, ref:'doctor'
    },
    Date:{
        type:Date,
    },
    Time : {
        type:String,
    },
Status :{
    type:String,
    enum : ['pending','confirmed','cancelled'],
}

});
module.exports = mongoose.model('appointment',appointmentSchema);