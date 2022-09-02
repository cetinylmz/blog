import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Register() {
  return (
    <>
      <Navbar />
      <div class="vizew-login-area section-padding-80">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-6">
              <div class="login-content">
                <div class="section-heading">
                  <h4>Seni Aramızda görmek ne güzel!</h4>
                  <div class="line"></div>
                </div>

                <form action="index.html" method="post">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="İsim Ve Soyad"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Şifre"
                    />
                  </div>

                  <button type="submit" class="btn vizew-btn w-100 mt-30">
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

export default Register;
