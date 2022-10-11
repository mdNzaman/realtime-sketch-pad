const { logInUserInfo} = require("../model/logInModel");

exports.logInUser = async (req, res) => {
    try {
        const body = req.body;
        const email_id = body.email_id;
        const password = body.password;
        console.log(email_id,password);

        const result = await logInUserInfo(email_id,password);
        // console.log(signInInformation.length,"....");
        // console.log(signInInformation[0].phone_num);  // error 
        console.log(result);
        if(result.length>0){
            return res.status(200).json({
                status: 1,
                message: "logged in successful",
                result: result[0]
            })
        }else{
            return res.status(403).json({
                status: 0,
                message: "Email or Password is invalid"
            })
        }

    } catch (err) {
        console.log("Server Error");
        res.status(500).json({
            success: 0,
            message: "Sorry, Database Error",
            error: err
        });
    }
}