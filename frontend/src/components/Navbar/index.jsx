import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth";

function Navbar() {
  const context = useContext(AuthContext);
  return (
    <>
      <header className="header-area">
        <div className="vizew-main-menu" id="sticker">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav
                className="classy-navbar justify-content-between"
                id="vizewNav"
              >
                <a href="index.html" className="nav-brand">
                  <h2>Logo</h2>
                </a>

                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>

                  <div className="classynav">
                    <ul>
                      <li className="active">
                        <Link to="/">Anasayfa</Link>
                      </li>

                      {context.user ? (
                        <li>
                          <Link to="/"  onClick={context.logout}>Çıkış Yap</Link>
                        </li>
                      ) : (
                        <li>
                          <Link to="/login">Giriş Yap</Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
