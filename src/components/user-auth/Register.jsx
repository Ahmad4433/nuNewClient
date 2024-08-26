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
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [curr, setCurr] = useState("XLM");
  const [loading, setLoading] = useState(false);

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const emailChnage = (event) => {
    setEmail(event.target.value);
  };

  const passChanage = (event) => {
    setPassword(event.target.value);
  };

  const currChange = (event) => {
    setCurr(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        "https://nu-new-server.vercel.app/user/register",
        {
          method: "POST",
          body: JSON.stringify({ name, email, pin: password, currency: curr }),
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
        navigate("/");
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
                Create New Account
              </h5>
              <p style={{ textAlign: "center" }}>
                Get your free nuPayments account now
              </p>
            </div>
            <form onSubmit={submitHandler}>
              <div className="register_form_container">
                <Multipair>
                  <FormPair>
                    <Label>Username</Label>
                    <Input
                      onChange={nameChange}
                      value={name}
                      required={true}
                      type="text"
                      placeholder="Enter username"
                    />
                  </FormPair>
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
                    <Label>Select Currency</Label>
                    <select
                      onChange={currChange}
                      value={curr}
                      className="ui_input"
                    >
                      <option>XLM</option>
                      <option>NRU</option>
                      <option>XRP</option>
                    </select>
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
                  <div className="register_terms_container">
                    <span>By registering you agree to the nuPayments</span>
                    <Link>Terms of Us</Link>
                  </div>

                  <div className="register_actions">
                    <Button disabled={loading}>
                 
                      {loading ? "Please Wait..." : " Sign Up"}
                    </Button>
                  </div>
                </Multipair>
              </div>

              <div className="register_options">
                <span>Already have an a ccount?</span>
                <Link to="/">SingIn</Link>
              </div>
            </form>
          </div>
          <div className="auth_bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
