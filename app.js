const express =require("express");
const app = express();
const doctorRouter = require("./routers/doctorroutes");
const appointmentRouter = require("./routers/appointmentroutes");
const paitentRouter = require("./routers/patientroutes");
const homeRouter = require("./routers/home");
const db = require('./db');

const path =require("path");
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));


app.use("/home",homeRouter);
app.use("/doctor",doctorRouter);
app.use("/appointment",appointmentRouter);
app.use("/patient",paitentRouter);


app.listen(3000);