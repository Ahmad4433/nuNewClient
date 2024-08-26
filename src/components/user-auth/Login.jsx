import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Label from "../ui/Label";
import FormPair from "../ui/FormPair";
import { Link, useNavigate } from "react-router-dom";
import Multipair from "../ui/Multipair";
import "./register.css";
import toast from "react-hot-toast";
import logo from "../../assets/nu-payments.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailChnage = (event) => {
    setEmail(event.target.value);
  };

  const passChanage = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        "https://nu-new-server.vercel.app/user/login",
        {
          method: "POST",
          body: JSON.stringify({ email, pin: password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const resData = await response.json();
      setLoading(false);
      if (!response.ok) {
        throw new Error(resData?.message);
      }

      if (resData?.status) {
        toast.success(resData?.message);
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="register_section" >
      <div className="auth_logo">
        <img src={logo} />
      </div>
      <div className="register_main">
        <div className="register_container">
          <div>
            <div className="register_header">
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "1.6rem",
                  fontWeight: "400",
                }}
              >
                Welcome Back
              </h5>
              <p style={{ textAlign: "center" }}>
                Sign in to continue to nuPayments.
              </p>
            </div>
            <form onSubmit={submitHandler}>
              <div className="register_form_container">
                <Multipair>
                  <FormPair>
                    <Label>Email</Label>
                    <Input
                      onChange={emailChnage}
                      value={email}
                      required={true}
                      type="email"
                      placeholder="Enter email"
                    />
                  </FormPair>
                  <FormPair>
                    <Label>Password</Label>
                    <Input
                      onChange={passChanage}
                      value={password}
                      required={true}
                      type="password"
                      placeholder="Enter Pin"
                    />
                  </FormPair>
                  <div className="register_terms_container term_login">
                    <div>
                      <span>Remember me</span>
                      <input type="checkbox" />
                    </div>
                    <Link>Forgot Password?</Link>
                  </div>

                  <div className="register_actions">
                    <Button disabled={loading}>
                      {loading ? "Please Wait..." : "Log in"}
                    </Button>
                  </div>
                </Multipair>
              </div>

              <div className="register_options">
                <span>Don't have an a ccount?</span>
                <Link to="/register">Sinup</Link>
              </div>
            </form>
          </div>
          <div className="auth_bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
