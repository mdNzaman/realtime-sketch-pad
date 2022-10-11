// const { registerUser, registerDevice, getRegisteredUser } = require("../models/registerUserModel");
// const jwt = require("jsonwebtoken");
const {signUpUser} = require("../model/signUpModel");

exports.signUpUser = async (req, res) => {
    try {
    
        const body = req.body;
        console.log(body);
        const first_name = body.first_name;
        const last_name = body.last_name;
        const email_id = body.email_id;
        const password = body.password;
        console.log(first_name,last_name,email_id,password);

        const color = '#' + Math.random().toString(16).substr(-6);
        console.log(color);
   
        // const jwtToken = jwt.sign({ phoneNumber, DOB }, "key");

        const signUpUserData = await signUpUser(first_name, last_name, email_id, password,color);
        console.log(signUpUserData)
        // const userId = getSignUpInformation.insertId;

        // const getSignUpDeviceInformation = await registerDevice(body, userId, date_created);
        // console.log(getSignUpDeviceInformation);

        // const results = await getRegisteredUser(userId);

            return res.status(200).json({
                success: 1,
                data: {
                    first_name: `${first_name}`,
                    last_name: `${last_name}`,
                    email_id: `${email_id}`,
                    password: `${password}`
                }
            })
    } catch (error) {
        console.log("Server Error");
        console.log(error);
        res.status(500).json({
            success: 0,
            message: "Server Error",
            error: error
        });
    }
};