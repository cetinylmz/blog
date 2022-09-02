import React, { useContext, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/auth";
import { LOGİN_USER } from "./queries";

function Login(props) {
  const history = useHistory();

  const context = useContext(AuthContext);

  const [loginUser, { loading, error, data }] =  useMutation(LOGİN_USER, {
    async update(_, result) {
      context.login(result.data.login);
      <Redirect to="/" />;
    
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    await loginUser({
      variables: {
        data: { email, password },
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="vizew-login-area section-padding-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <div className="login-content">
                <div className="section-heading">
                  <h4>Seni Tekrar görmek ne güzel!</h4>
                  <div className="line"></div>
                </div>

                <form onSubmit={handleSumbit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <Link to="register" className="register">
                      Kayıt Ol!
                    </Link>
                  </div>
                  <button type="submit" className="btn vizew-btn w-100 mt-30">
                    Giriş Yap
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
