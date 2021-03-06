import React, { useState } from "react";
import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Checkbox,
} from "carbon-components-react";
import "./login.scss";
import { ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import Error from "components/common/Error";
import TextBox from "components/common/TextBox";

function Login() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [twoFA, setTwoFA] = useState(null);
  const [btnText, setBtnText] = useState("Continue");
  const [error, setError] = useState({});
  const [remember, setRemember] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pswdError, setPswdError] = useState(false);

  const continueClick = () => {
    if (step === 1) {
      setEmailError(false);
      if (!validateEmail(email)) {
        setEmailError(true);
        return;
      }
    }
    if (step === 2) {
      setPswdError(false);
      if (!validatePswd(password)) {
        setPswdError(true);
        return;
      }
      setBtnText("Log in");
    }
    if (step === 3) {
      setError({
        visible: true,
        message: "Login Failed.",
        reason: "Invalid Code.",
      });
    } else setStep(step + 1);
  };

  const hideError = () => {
    setError({});
  };

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePswd = (pswd) => {
    if (!pswd || pswd.length < 6) {
      return false;
    }
    return true;
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h4>Log in</h4>
        <div className="sub-text">
          Don't have an account? <label>Register Now</label>
        </div>
        <div className="form-container">
          <div className="email-container">
            <Form>
              {step === 1 ? (
                <div className="step-container">
                  <FormGroup className="M0">
                    <TextInput
                      invalid={emailError}
                      id="email"
                      invalidText="Invalid e-mail"
                      labelText="Enter your Strobes ID"
                      placeholder="john.doe@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </FormGroup>
                </div>
              ) : step === 2 ? (
                <div className="step-container">
                  <div className="user-email">
                    <ArrowLeft16
                      className="CP"
                      fill="#0F62FE"
                      onClick={() => setStep(1)}
                    />
                    <label>{email}</label>
                  </div>
                  <FormGroup className="M0">
                    <TextInput
                      invalid={pswdError}
                      id="password"
                      type="password"
                      pattern="{6,}"
                      invalidText="Password should atleast be 6 characters"
                      placeholder="*******"
                      value={password}
                      pattern=""
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </FormGroup>
                </div>
              ) : (
                <div className="step-container">
                  <FormGroup className="M0">
                    <TextInput
                      id="password"
                      type="password"
                      labelText="2-Step Verification"
                      invalidText="Invalid error message."
                      placeholder="****"
                      value={twoFA}
                      onChange={(e) => {
                        setTwoFA(e.target.value);
                      }}
                    />
                  </FormGroup>
                </div>
              )}
              <Button
                className="submit-icon"
                renderIcon={ArrowRight16}
                onClick={() => continueClick()}
              >
                {btnText}
              </Button>
              {step !== 3 ? (
                <>
                  <div className="actions-items">
                    <fieldset>
                      <Checkbox
                        labelText="Remember Me"
                        id="remember"
                        checked={remember}
                        onChange={(e) => {
                          setRemember(e);
                        }}
                      />
                    </fieldset>
                    <div className="forgot">Forgot Password</div>
                  </div>
                  <div className="login-sso">Log in with SAML SSO</div>
                </>
              ) : null}
              {error.visible ? (
                <Error error={error} className="MT30" hideError={hideError} />
              ) : null}
            </Form>
          </div>
        </div>
      </div>
      <div className="copyright">
        © Copyright Strobes 2020. All Rights Reserved.
      </div>
    </div>
  );
}

export default Login;
