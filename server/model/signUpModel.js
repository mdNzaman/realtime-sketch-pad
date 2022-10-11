const dbConn = require("../config/db");

exports.signUpUser = async (first_name, last_name, email_id, password, color) => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            `insert into users(first_name, last_name, email_id, password,color) values(?,?,?,?,?)`,
            [
                first_name,
                last_name,
                email_id,
                password,
                color
            ],
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }
        );
    });
};

// exports.registerDevice = async (
//     body,
//     userId,
//     dateTime
// ) => {
//     return new Promise((resolve, reject) => {
//         dbConn.query(
//             `replace into users_devices(user_id,device_type,device_token,created_datetime)
//     values(?,?,?,?)`,
//             [
//                 userId, body.device_type, body.device_token, dateTime
//             ],
//             (error, result) => {
//                 if (error) {
//                     reject(error);
//                 }
//                 resolve(result);
//             }
//         );
//     });
// };

// exports.getRegisteredUser = async (userId) => {
//     return new Promise((resolve, reject)=>{
//         dbConn.query(
//             `select * from users join users_devices on users.user_id = users_devices.user_id where users.user_id=?`,
//             [
//                 userId
//             ],(err, result) => {
//                 if (err) {
//                     reject(err);
//                 }
//                 resolve(result);
//             }
//         );
//     })
// };