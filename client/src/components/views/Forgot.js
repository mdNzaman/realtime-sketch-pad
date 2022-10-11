import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../utilities/Forms";

const Forgot = () => {

  let text = {
    color: "#7850b8",
  };
  let bg = {
    background:"#7850b8"
  }
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const forgotPassword =async (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    // apis working
    const response = await fetch("http://localhost:8000/naya-studio/forget-password", {
      // mode: 'no-cors',
      method: "POST",
      headers: {
        // Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        email_id:email,
      })
    //  {console.log(body)}
      // body: JSON.stringify(credentials),
    }).then((data) => data.json());

    console.log(response);
    // console.log(data);

    if (validate) {
      alert("Reset password link is sent to " + email);
      setValidate({});
      setEmail("");
    }
  };

  return (
    <div className="row g-0 auth-wrapper">
      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <h3 style={text}>Forgot Password</h3>
            <div className="auth-form-container text-start my-3">
              <form
                className="auth-form"
                method="POST"
                onSubmit={forgotPassword}
                autoComplete={"off"}
              >
                <div className="email mb-3">
                  <input
                    type="email"
                    className={`form-control ${
                      validate.validate && validate.validate.email
                        ? "is-invalid "
                        : ""
                    }`}
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.email
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""}
                  </div>
                </div>

                <div className="text-center" >
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                    style={bg}
                  >
                    Forgot Password
                  </button>
                </div>
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                <Link className="text-link" to="/login" style={text}>
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
