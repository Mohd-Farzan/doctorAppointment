const doctormodel = require("../models/doctor");


module.exports.createDoctor = async (req, res) => {
    try {
        let { Name, Specialty , Availability,Email,Address,Time,Fees } = req.body;

        let doctor = await doctormodel.create({
            Name,
            Specialty,
            Availability,
            Email,
            Address,
            Time,
            Fees,

        });
console.log(doctor)
       
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Failed to create patient',
            details: err.message || err
        });
    }
};

module.exports.showDoctor = async (req, res) => {
    try {

        let doctor = await doctormodel.find();
         res.render("showdoc",{doctor});


       
    } catch (err) {
        console.error(err);
     
    }
};