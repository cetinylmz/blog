import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function AddPost() {
  return (
    <>
      <Navbar />
      <div class="vizew-login-area section-padding-80">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-6">
              <div class="login-content">
                <div class="section-heading">
                  <h4>Yeni Göderi Oluştur!</h4>
                  <div class="line"></div>
                </div>

                <form action="index.html" method="post">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Başlık"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Açıklama"
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

export default AddPost;
