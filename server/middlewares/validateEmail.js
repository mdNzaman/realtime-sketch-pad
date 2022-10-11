const dbConn = require("../config/db");

exports.validateEmail = (req, res, next) => {
    try {
        const body = req.body;
        const email_id = body.email_id;
        dbConn.query(`select user_id from users where email_id=?`,
            [
                email_id
            ],
            (err, result) => {
                if (err) {
                    // console.log("Server error locating Email id");
                    return res.status(500).json({
                        success:0,
                        message:"Server error locating Email id",
                        err:err
                    });
                }
                console.log(result.length);
                if (result.length > 0) {
                    console.log("User Registered");
                    next();
                }else{ 
                    console.log("User Not Registered");
                    return res.status(400).json({
                        success:0,
                        message:"User Not Registered."
                    })
                }
            }
        );
    } catch (err) {
        res.status(500).json({
            success: 0,
            err: err,
        });
    }
};