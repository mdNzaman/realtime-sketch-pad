const dbConn = require("../config/db");

exports.logInUserInfo = async (email_id,password) => {
    return new Promise((resolve, reject)=>{
        dbConn.query(
            `select user_id,CONCAT(first_name," ",last_name) as name,color from users where email_id=? and password=?`,
            [
                email_id,
                password
            ],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            }
        );
    })
};