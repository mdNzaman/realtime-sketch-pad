const express = require("express");
const app = express();
const router = require("./router/routes");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT ;
// || 8000;

// app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
// app.use(cors);
app.use(cors({
    origin: '*'
}));
  
app.get("/",(req,res)=>{
    console.log("apis working..");
    res.status(200).json({
        success:1,
        message:"apis working.."
    });
});

// app.use("/naya-studio/app/v1/",router);
app.use("/naya-studio/",router);


app.listen(port,()=>{
    console.log(`server on and running at port: ${port}`);
});