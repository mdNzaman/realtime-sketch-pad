// const { logInUserInfo } = require("../model/logInModel");

exports.userForgetPassword = async (req, res) => {
  try {
    const body = req.body;
    const email_id = body.email_id;
    // const password = body.password;
    console.log(email_id);
    return res.status(200).json({
      status: 1,
      message: "Password reset link has been sent to your email",
    });
  } catch (err) {
    console.log("Server Error");
    res.status(500).json({
      success: 0,
      message: "Server Error",
      error: err,
    });
  }
};
