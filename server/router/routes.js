const router = require("express").Router();

//Controllers
// const { sendPhoneVerificationOtp } = require("../controllers/sendPhoneVerificationOtpController");
// const { verifyPhoneVerificationOtp } = require("../controllers/verifyPhoneVerificationOtpController");
const { signUpUser } = require("../controller/signUpController");
const { logInUser } = require("../controller/logInControllers");
const { userForgetPassword } = require("../controller/forgetPasswordController");



//Middlewares
const { registeredEmailCheck } = require("../middlewares/registeredEmailCheck");
const { validateEmail } = require("../middlewares/validateEmail");


//Routes
// router.post("/send-phone-verification-otp", sendPhoneVerificationOtp);
// router.post("/verify-phone-verification-otp", verifyPhoneVerificationOtp);
router.post("/log-in", logInUser );
router.post("/sign-up",registeredEmailCheck, signUpUser );
router.post("/forget-password",validateEmail, userForgetPassword );


module.exports = router;